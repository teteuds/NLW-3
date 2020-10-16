const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos Meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "779885646",
    images: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1023&q=80",

      "https://images.unsplash.com/photo-1531368345462-e180bd618c89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e pacoência para dar.",
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });

  // Consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente um orphanato , pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "10"');
  console.log(orphanage);

  // deletar dado da tabela
  //console.log(await db.run('DELETE FROM orphanages WHERE id = "10"'))
});
