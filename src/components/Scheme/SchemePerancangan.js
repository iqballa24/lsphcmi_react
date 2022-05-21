import React from "react";
import ScemeSection from "elements/ScemeSection";
import {
  SKKNIPerencanaan,
  SKKNIPengembangan,
  SKKNIPengelolaan,
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
    kdUnit: "M.70SDM01.002.2",
    titleUnit: "Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM",
  },
  {
    id: 3,
    kdUnit: "M.70SDM01.004.2",
    titleUnit: "Merancang Desain Organisasi",
  },
  {
    id: 4,
    kdUnit: "M.70SDM01.010.2",
    titleUnit: "Menyusun Uraian Jabatan",
  },
  {
    id: 5,
    kdUnit: "M.70SDM01.012.2",
    titleUnit: "Menyusun Kebutuhan SDM",
  },
];

const title = "Skema Perencaan Human Capital";

const desc =
  "Skema Perencanaan Human Capital dengan menggunakan klaster kompetensi terdapat 5 unit kompetensi, sebagai berikut :";

const SchemePerencanaan = () => {
  return (
    <ScemeSection
      columnTable={column}
      dataTable={data}
      title={title}
      desc={desc}
      filePdf={SKKNIPerencanaan}
    />
  );
};

export default SchemePerencanaan;
