import React from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero";
import { useTranslation } from "react-i18next";
import i18n from "../Components/i18n";

export default function Documents() {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
      <Header />
      <Hero />

      <div
        id='laws'
        className='container min-h-screen mx-auto px-4 section-padding text-xs sm:text-sm lg:text-base text-gray-500'>
        <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[30px] md:gap-[80px] lg:gap-[180px]'>
          <h1 className={`text-[#09426C] font-[Roboto] font-bold text-2xl`}>
            {currentLanguage == "mn" ? <>Баримт бичиг</> : <>Documents</>}
          </h1>
          <div className={`${currentLanguage == "mn" ? "" : "ml-0 sm:ml-10"} `}>
            {currentPage == 1 ? (
              <span className='text-xs md:text-xl lg:text-2xl font-bold p-4'>
                {currentLanguage == "mn" ? <>Хууль</> : <>Law</>}
              </span>
            ) : null}
            {currentPage == 2 ? (
              <span className='text-xs md:text-xl lg:text-2xl font-bold p-4'>
                {currentLanguage == "mn" ? (
                  <> СЗХ-ны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the FRC</>
                )}
              </span>
            ) : null}
            {currentPage == 3 ? (
              <span className='text-xs md:text-xl lg:text-2xl font-bold p-4'>
                {currentLanguage == "mn" ? (
                  <>Холбооны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the MJAE</>
                )}
              </span>
            ) : null}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row w-full gap-y-8 sm:gap-y-16 mt-10 gap-x-4 sm:gap-x-10'>
          <div className='hidden sm:flex sm:flex-col sm:items-start w-full sm:w-4/12 border-[#f0f0f0]'>
            <button
              onClick={() => setCurrentPage(1)}
              className='flex sm:justify-between items-center border-t-[2px] border-top border-[#f0f0f0] w-full p-4 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? <>Хууль</> : <>Law</>}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className='flex sm:justify-between items-center border-t-[2px] border-top border-[#f0f0f0] w-full p-4 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? (
                  <>СЗХ-ны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the FRC</>
                )}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className='flex sm:justify-between items-center border-y-[2px] border-top sm:border-bottom border-[#f0f0f0] w-full p-4 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? (
                  <>Холбооны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the MJAE</>
                )}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
          </div>
          <div className='flex sm:hidden sm:items-start w-full border-[#f0f0f0] border-bottom sm:border-none'>
            <button
              onClick={() => setCurrentPage(1)}
              className='flex justify-center items-center border-t-[2px] border-top border-[#f0f0f0] w-full p-2 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? <>Хууль</> : <>Law</>}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className='flex sm:justify-between items-center border-t-[2px] border-top border-[#f0f0f0] w-full p-2 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? (
                  <>СЗХ-ны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the FRC</>
                )}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className='flex sm:justify-between items-center border-y-[2px] border-top sm:border-bottom border-[#f0f0f0] w-full p-2 text-start transition-colors hover:bg-[#2957a4] hover:text-white'>
              <span className=''>
                {currentLanguage == "mn" ? (
                  <>Холбооны батласан журам, заавар, аргачлал</>
                ) : (
                  <>Regulations and instructions approved by the MJAE</>
                )}
              </span>
              <img src='arrowDocs.png' className='w-4 h-4' />
            </button>
          </div>
          {currentPage == 1 ? (
            <div className='w-full sm:w-9/12'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                    <th className='h-16 p-4 border border-[#f0f0f0]'>№</th>
                    <th className='p-4 border border-[#f0f0f0] text-start'>
                      {currentLanguage == "mn" ? <>Нэр</> : <>Name</>}
                    </th>
                    <th
                      className={` ${
                        currentLanguage == "mn"
                          ? "w-10 lg:w-[90px] p-2 lg:p-4"
                          : "w-10 text-center lg:w-[90px] p-2 lg:p-4"
                      } border border-[#f0f0f0]`}>
                      {currentLanguage == "mn" ? <>Танилцах</> : <>Read</>}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {laws.map((law) => (
                    <tr law={law} key={law.id}>
                      <th className='h-16 p-4 border border-[#f0f0f0] text-[#2957a4]'>
                        {law.id}
                      </th>
                      <th className='font-normal p-4 border border-[#f0f0f0] text-start'>
                        {currentLanguage == "mn" ? (
                          <>{law.name}</>
                        ) : (
                          <>{law.name1}</>
                        )}
                      </th>
                      <th className='border border-[#f0f0f0]'>
                        <a
                          className='flex justify-center lg:w-[90px] p-2 lg:p-4 text-[#02a3ea]'
                          href={law.link}
                          target='_blank'>
                          {currentLanguage == "mn" ? <>Үзэх</> : <>See</>}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {currentPage == 2 ? (
            <div className='w-full sm:w-9/12'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                    <th className='h-16 p-4  border border-[#f0f0f0]'>№</th>
                    <th className='p-4 border border-[#f0f0f0] text-start'>
                      {currentLanguage == "mn" ? <>Нэр</> : <>Name</>}
                    </th>
                    <th
                      className={` ${
                        currentLanguage == "mn"
                          ? "w-10 lg:w-[90px] p-2 lg:p-4"
                          : "w-10 text-center lg:w-[90px] p-2 lg:p-4"
                      } border border-[#f0f0f0]`}>
                      {currentLanguage == "mn" ? <>Танилцах</> : <>Read</>}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rules.map((rule) => (
                    <tr rule={rule} key={rule.id}>
                      <th className='h-16 p-4 border border-[#f0f0f0] text-[#2957a4]'>
                        {rule.id}
                      </th>
                      <th className='font-normal p-4 border border-[#f0f0f0] text-start'>
                        {currentLanguage == "mn" ? (
                          <>{rule.name}</>
                        ) : (
                          <>{rule.name1}</>
                        )}
                      </th>
                      <th className='border border-[#f0f0f0]'>
                        <a
                          className='flex justify-center lg:w-[90px] p-2 lg:p-4 text-[#02a3ea]'
                          href={rule.link}
                          border
                          target='_blank'>
                          {currentLanguage == "mn" ? <>Үзэх</> : <>See</>}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {currentPage == 3 ? (
            <div className='w-full sm:w-9/12'>
              <table className='table-auto w-full'>
                <thead>
                  <tr className='text-[#2957a4] bg-[#f8f8f8]'>
                    <th className='h-16 p-4  border border-[#f0f0f0]'>№</th>
                    <th className='p-4 border border-[#f0f0f0] text-start'>
                      {currentLanguage == "mn" ? <>Нэр</> : <>Name</>}
                    </th>
                    <th
                      className={` ${
                        currentLanguage == "mn"
                          ? "w-10 lg:w-[90px] p-2 lg:p-4"
                          : "w-10 text-center lg:w-[90px] p-2 lg:p-4"
                      } border border-[#f0f0f0]`}>
                      {currentLanguage == "mn" ? <>Танилцах</> : <>Read</>}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rules2.map((rule) => (
                    <tr rule={rule} key={rule.id}>
                      <th className='h-16 p-4 border border-[#f0f0f0] text-[#2957a4]'>
                        {rule.id}
                      </th>
                      <th className='font-normal p-4 border border-[#f0f0f0] text-start'>
                        {currentLanguage == "mn" ? (
                          <>{rule.name}</>
                        ) : (
                          <>{rule.name1}</>
                        )}
                      </th>
                      <th className='border border-[#f0f0f0]'>
                        <a
                          className='flex justify-center lg:w-[90px] p-2 lg:p-4 text-[#02a3ea]'
                          href={rule.link}
                          target='_blank'>
                          {currentLanguage == "mn" ? <>Үзэх</> : <>See</>}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
const laws = [
  {
    id: 1,
    name: "Монгол Улсын Үндсэн хууль",
    name1: "Constitution of Mongolia",
    link: "https://legalinfo.mn/mn/detail?lawId=367",
  },
  {
    id: 2,
    name: "Иргэний хууль",
    name1: "Civil law",
    link: "https://legalinfo.mn/mn/detail/299",
  },
  {
    id: 3,
    name: "Санхүүгийн зохицуулах хорооны эрх зүйн байдлын тухай хууль",
    name1: "The Law on the Legal Status of the Financial Regulatory Commission",
    link: "https://legalinfo.mn/mn/detail?lawId=446",
  },
  {
    id: 4,
    name: "Мөнгө угаах болон терроризмыг санхүүжүүлэхтэй тэмцэх тухай хууль",
    name1: "The Law on Anti-Money Laundering and Anti-Terrorist Financing Act",
    link: "https://legalinfo.mn/mn/detail?lawId=9242",
  },
  {
    id: 5,
    name: "Үй олноор хөнөөх зэвсэг дэлгэрүүлэх болон терроризмтой тэмцэх тухай хууль",
    name1:
      "The Law on Proliferation of Weapons of Mass Destruction and Combating Terrorism",
    link: "https://legalinfo.mn/mn/detail?lawId=14696",
  },
  {
    id: 6,
    name: "Үндэсний төлбөрийн системийн тухай хууль",
    name1: "The Law on National Payment System Act",
    link: "https://legalinfo.mn/mn/detail?lawId=12668",
  },
  {
    id: 7,
    name: "Төлбөр тооцоог үндэсний мөнгөн тэмдэгтээр гүйцэтгэх тухай хууль",
    name1: "The law of conducting settlement in national currency",
    link: "https://legalinfo.mn/mn/detail?lawId=484",
  },
  {
    id: 8,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн тухай хууль",
    name1: "The law on Virtual Asset Service Providers",
    link: "https://legalinfo.mn/mn/detail?lawId=16390242606091",
  },
];
const rules = [
  {
    id: 1,
    name: "Мөнгө угаах болон терроризмыг санхүүжүүлэхтэй тэмцэх чиглэлээр банкнаас бусад мэдээлэх үүрэгтэй этгээдэд зайны болон газар дээрх хяналт шалгалт хийх журам",
    name1:
      "Regulation for remote and on-site inspections of reporting entities other than banks in the field of combating money laundering and terrorist financing",
    link: "http://www.frc.mn/resource/frc/Document/2023/02/01/qvrp58r1akc69qzi/МУТСТ%20Зайны%20болон%20газар%20дээрх%20хяналт%20шалгалтын%20журам.pd",
  },
  {
    id: 2,
    name: 'Зохицуулалтын үйлчилгээний хөлсний хэмжээг тогтоох, төвлөрүүлэх журам"-ыг шинэчлэн батлах тухай',
    name1:
      'On the new approval of the "Regulation for determining and collecting fees for regulatory services.',
    link: "http://www.frc.mn/resource/frc/Document/2022/11/10/7twg7iqb8fvxmywz/Codification_zohitsuulalt%20last_organized.pdf",
  },
  {
    id: 3,
    name: "Тохиромжтой этгээдийг тодорхойлох журам",
    name1: "Regulation for determining the appropriate person",
    link: "http://www.frc.mn/resource/frc/Document/2022/07/01/6sdc30hur52ij34m/Тохиромжтой%20этгээдийг%20тодорхойлох%20журам%20Кодификаци%20хийсэн-.pdf",
  },
  {
    id: 4,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн үйл ажиллагаанд хязгаарлалт тогтоох, түр зогсоох, бүртгэлээс хасах журам",
    name1:
      "Regulation on imposing restrictions and suspensions of operations of the VASP",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/07/z6douk982kiodwft/Үйл%20ажиллагааг%20түр%20зогсоох%20бүртгэлээс%20хасах%20журам.pdf",
  },
  {
    id: 5,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн үйл ажиллагаанд зайны болон газар дээр хяналт шалгалт хийх журам",
    name1: "Regulation on off-site and on-site supervision to VASP",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/07/3zua7wuavklmyvjj/Зайны%20болон%20газар%20дээр%20хяналт%20шалгалт%20хийх.pd",
  },
  {
    id: 6,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн аудит хийх хуулийн этгээдийг бүртгэх, бүртгэхэд тавих нөхцөл, шаардлагыг тогтоох журам",
    name1: "Regulation on registrering VASP auditors",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/06/depp3okr8j33u85t/Аудит%20хийх%20хуулийн%20этгээдийг%20бүртгэх.pdf",
  },
  {
    id: 7,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн бүртгэлийн журам",
    name1: "Regulation on VASP registration",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/06/odek012i70vajt65/бүртгэлийн%20журам%201.pdf",
  },
  {
    id: 8,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн мэргэжлийн холбоонд тавих шаардлагыг тогтоох журам",
    name1: "Regulation on requirements for VASP professional association",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/06/6prun1ja7hocdsv4/шаардлагыг%20тогтоох%20тухай.pd",
  },
  {
    id: 9,
    name: "Виртуал хөрөнгийн үйлчилгээ үзүүлэгчийн үйл ажиллагааны журам",
    name1: "Regulation on VASP operation",
    link: "http://www.frc.mn/resource/frc/Document/2022/06/06/tte87po6dzsz044k/үйл%20ажиллагааны%20журам%201.pdf",
  },
];
const rules2 = [
  { id: 1, name: "МБНХ-ны Дүрэм", name1: "The Rules of the MJAE", link: "" },
  {
    id: 2,
    name: "Ёс зүйн дүрэм",
    name1: "Code of Conduct of the MJAE",
    link: "",
  },
  {
    id: 3,
    name: "ВХҮҮ-ийн мэргэжлийн холбооны гишүүнчлэлийн журам",
    name1: "Regulation on membership of the professional association of VASP",
    link: "",
  },
  {
    id: 4,
    name: "ВХҮҮ-ээр бүртгүүлэх хүсэлт гаргагч хуульд заасан зарим шаардлагыг хангасан эсэх асуудлаар дүгнэлт гаргах журам",
    name1:
      "Regulation for making a decision on the issue of whether the applicant for registration as a virtual asset service provider meets certain requirements set forth in the law",
    link: "",
  },
  {
    id: 5,
    name: "Гишүүний үйл ажиллагаанд хяналт тавих болон гомдол, маргааныг хянан шийдвэрлэх журам",
    name1:
      "Regulation for monitoring member activities and handling complaints and disputes",
    link: "",
  },
  {
    id: 6,
    name: "Гишүүдэд сургалт явуулах, мэргэжлийн ур чадварыг дээшлүүлэхэд чиглэсэн арга хэмжээ зохион байгуулах журам",
    name1:
      "Regulation for conducting training for members and organizing events aimed at improving professional skills",
    link: "",
  },
];
