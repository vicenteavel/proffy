const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {

   proffyValue = {
      name: 'Vicente Avelino',
      avatar: "https://avatars1.githubusercontent.com/u/19335227?s=400&u=3fa5793467b7515749912be73569220d3034c196&v=4",
      whatsapp: "83986544259",
      bio: "Instrutor de Matemática",
   };

   classValue = {
      subject: 8,
      cost: "200"
   };

   classScheduleValues = [
      {
         weekday: 1,
         time_from: 720,
         time_to: 1220
      },
      {
         weekday: 0,
         time_from: 520,
         time_to: 1220,
      }
   ];

   // await createProffy(db, { proffyValue, classValue, classScheduleValues });
   
   const selectedProffys = await db.all("SELECT * FROM proffys");
   
   const selectedClassesAndProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1;
   `);

   const selectedClassesSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = 1
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "1300"
      AND class_schedule.time_to > "1300"
   `);

});