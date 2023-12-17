'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Courses", [
      {
        courseName: "Matematika SD",
        description:
          "Mata pelajaran matematika di SD kelas 6 mencakup konsep-konsep seperti pecahan dan desimal, rasio, kubus dan balok, dan peluang. Siswa akan belajar mengaplikasikan pengetahuan mereka dalam menyelesaikan masalah matematika yang lebih kompleks, memperdalam pemahaman tentang hubungan antar bilangan, dan mengembangkan keterampilan logika matematika.",
        level: "SD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Bahasa Inggris SD",
        description:
          "Mata pelajaran Bahasa Inggris di SD kelas 6 biasanya mencakup pembelajaran keterampilan dasar seperti membaca, menulis, mendengarkan, dan berbicara. Siswa akan memperdalam pemahaman tata bahasa, kosa kata, serta mampu menyusun kalimat dan paragraf sederhana dalam bahasa Inggris. Materi pelajaran juga dapat melibatkan pemahaman teks pendek, percakapan sehari-hari, dan pengetahuan dasar tentang budaya berbahasa Inggris.",
        level: "SD",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Matematika SMP",
        description:
          "Matematika kelas 9 SMP mencakup topik-topik yang lebih kompleks, seperti geometri, dan statistika. Siswa mempelajari konsep-konsep seperti persamaan dan pertidaksamaan linear, fungsi, segitiga, bangun ruang, dan distribusi data. Mata pelajaran ini bertujuan mengembangkan pemahaman matematis yang lebih mendalam serta keterampilan pemecahan masalah.",
        level: "SMP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Bahasa Inggris SMP",
        description:
          "Mata pelajaran Bahasa Inggris untuk kelas 9 SMP biasanya mencakup pembelajaran tata bahasa yang lebih kompleks, kosa kata yang lebih luas, membaca dan memahami teks yang lebih panjang, serta peningkatan kemampuan menulis esai dan narasi. Materi yang umumnya diajarkan melibatkan tenses, conditional sentences, passive voice, dan pengembangan keterampilan berbicara dalam konteks situasi sehari-hari. Selain itu, siswa juga akan belajar menganalisis teks fiksi dan nonfiksi untuk memahami struktur, tema, dan tujuan komunikatifnya.",
        level: "SMP",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Matematika SMA",
        description:
          "Mata pelajaran matematika untuk SMA kelas 12 mencakup topik-topik yang lebih kompleks dan mendalam dibandingkan dengan kelas sebelumnya. Ini termasuk pembahasan mengenai integral, diferensial, matriks, ruang vektor, trigonometri lanjut, dan topik-topik kalkulus lebih tinggi. Siswa juga mempelajari statistika dan probabilitas dengan tingkat kesulitan yang lebih tinggi, serta penerapan konsep-konsep matematika dalam konteks kehidupan sehari-hari dan bidang ilmu lainnya.",
        level: "SMA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseName: "Bahasa Inggris SMA",
        description:
          "Mata pelajaran Bahasa Inggris untuk SMA kelas 12 mengacu pada pemahaman dan penerapan keterampilan berbahasa. Fokus utamanya meliputi analisis sastra, tata bahasa tingkat lanjut, penulisan esai, mendengarkan, berbicara, dan membaca teks kompleks. Siswa akan diekspos pada karya sastra klasik dan kontemporer serta diajak untuk mengembangkan kemampuan berkomunikasi secara efektif dalam bahasa Inggris. Evaluasi seringkali melibatkan penafsiran sastra, penulisan reflektif, serta diskusi mendalam terkait konten bahasa Inggris yang lebih kompleks.",
        level: "SMA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
