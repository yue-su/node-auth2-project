
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex("roles")
        .insert([{ name: "admin" }, { name: "user" }])
        .then(() => console.log("\n== Seed data for roles table added. ==\n"))
    });
};
