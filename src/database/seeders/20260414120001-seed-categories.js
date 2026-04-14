'use strict';

const now = new Date();

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('category', [
      { name: 'Action',      createdAt: now, updatedAt: now },
      { name: 'Comedy',      createdAt: now, updatedAt: now },
      { name: 'Drama',       createdAt: now, updatedAt: now },
      { name: 'Horror',      createdAt: now, updatedAt: now },
      { name: 'Sci-Fi',      createdAt: now, updatedAt: now },
      { name: 'Thriller',    createdAt: now, updatedAt: now },
      { name: 'Romance',     createdAt: now, updatedAt: now },
      { name: 'Animation',   createdAt: now, updatedAt: now },
      { name: 'Documentary', createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('category', null, {});
  },
};
