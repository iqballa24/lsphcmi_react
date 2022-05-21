import React from "react";
import ScemeSection from "elements/ScemeSection";
import {
  SKKNIPengembangan
} from "data/pdf";

const column = [
  {
    id: 1,
    name: "No",
  },
  {
    id: 2,
    name: "Kode Unit Kompetensi",
  },
  {
    id: 3,
    name: "Judul Unit Kompetensi",
  },
];

const data = [
  {
    id: 1,
    kdUnit: "M.70SDM01.001.2",
    titleUnit:
      "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)",
  },
  {
    id: 2,
    kdUnit: "M.70SDM01.013.2",
    titleUnit: "Menyusun Standar Operasional Prosedur (SOP) MSDM",
  },
  {
    id: 3,
    kdUnit: "M.70SDM01.003.2",
    titleUnit: "Menetapkan Rencana Kegiatan dan Anggaran MSDM",
  },
  {
    id: 4,
    kdUnit: "M.70SDM01.031.2",
    titleUnit: "Menyusun Kebutuhan Pembelajaran dan Pengembangan",
  },
  {
    id: 5,
    kdUnit: "M.70SDM01.032.2",
    titleUnit: "Merancang Program Pembelajaran dan Pengembangan",
  },
  {
    id: 6,
    kdUnit: "M.70SDM01.034.2",
    titleUnit: "Mengevaluasi Pelaksanaan Program Pembelajaran dan Pengembangan",
  },
  {
    id: 7,
    kdUnit: "M.70SDM01.037.2",
    titleUnit: "Menyusun Kelompok Pekerja Bertalenta (Talent Pool)",
  },
  {
    id: 8,
    kdUnit: "M.70SDM01.038.2",
    titleUnit: "Mengelola Program Pengembangan Kelompok Pekerja Bertalenta (Talent Pool)",
  },
  {
    id: 9,
    kdUnit: "M.701001.040.01",
    titleUnit: "Mengelola Program Suksesi",
  },
  {
    id: 10,
    kdUnit: "M.70SDM01.002.2",
    titleUnit: "Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM",
  },
];

const title = "Skema Pengembangan Human Capital";

const desc =
  "Skema Pengembangan Human Capital dengan menggunakan klaster kompetensi terdapat 10 unit kompetensi, sebagai berikut :";

const SchemePengembangan = () => {
  return (
    <ScemeSection
      columnTable={column}
      dataTable={data}
      title={title}
      desc={desc}
      filePdf={SKKNIPengembangan}
    />
  );
};

export default SchemePengembangan;
