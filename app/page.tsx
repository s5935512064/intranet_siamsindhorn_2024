import Image from "next/image";
import Hero from "@/components/Hero";
import MainCI from "@/components/MainCI";
import Overview from "@/components/Overview";
import MainFeature from "@/components/MainFeature";
import Timeline from "@/components/Timeline";
import FeatureDetail from "@/components/FeatureDetail";
import { FlipWords } from "@/components/ui";

const feature_detail = [
  {
    id: 1,
    feature_id: "feature_1",
    imgSrc: "/assets/dashboard-page.png",
    title_one: "Information is power,",
    title_two: "Empower your team.",
    subtitle:
      "สร้างพื้นที่กลางสำหรับแลกเปลี่ยนข้อมูลแบบเรียลไทม์ เน้นการมีส่วนร่วมและการเข้าถึงข้อมูลที่สำคัญอย่างรวดเร็ว",
    next: "feature_2",
    prev: "mainfeature",
  },
  {
    id: 2,
    feature_id: "feature_2",
    imgSrc: "/assets/learning-page.png",
    title_one: "Growth is a journey,",
    title_two: " Not a destination.",
    subtitle:
      "สร้างแพลตฟอร์มการเรียนรู้ที่ปรับเปลี่ยนได้ตามความต้องการของแต่ละบุคคล เน้นการเรียนรู้แบบต่อเนื่องและการนำไปใช้จริง",
    next: "feature_3",
    prev: "feature_1",
  },
  {
    id: 3,
    feature_id: "feature_3",
    imgSrc: "/assets/cuture-page.png",
    title_one: "Our DNA,",
    title_two: "Roadmap to success.",
    subtitle:
      "รากฐานแห่งความสำเร็จ เริ่มจากความเข้าใจในตัวตน นำเสนอวัฒนธรรมองค์กร เพื่อสร้างความตระหนักรู้และสร้างแรงบันดาลใจ",
    next: "feature_4",
    prev: "feature_2",
  },
  {
    id: 4,
    feature_id: "feature_4",
    imgSrc: "/assets/document-page.png",
    title_one: "Paperless power",
    title_two: "At your fingertips.",
    subtitle: "ลดกระดาษ เพิ่มประสิทธิภาพ สู่องค์กรแห่งอนาคต",
    next: "feature_5",
    prev: "feature_3",
  },
  {
    id: 5,
    feature_id: "feature_5",
    imgSrc: "/assets/organizational-page.png",
    title_one: "Know your team,",
    title_two: "Amplify your impact.",
    subtitle:
      "แสดงโครงสร้างองค์กร โปรไฟล์พนักงาน ส่งเสริมให้รู้จักคนในทีม เพิ่มพลังการทำงาน",
    next: "feature_6",
    prev: "feature_4",
  },
  {
    id: 6,
    feature_id: "feature_6",
    imgSrc: "/assets/Internal-service-page.png",
    title_one: "one-stop service",
    title_two: "For everything at work.",
    subtitle:
      "รวมทุกบริการ ไว้ที่เดียวเพื่อให้เข้าถึงบริการได้ง่ายขึ้น พร้อมคำแนะนำที่ช่วยให้พนักงานเข้าถึงสิ่งที่ต้องการได้ตรงจุด",
    next: "timeline",
    prev: "feature_5",
  },
];
export default function Home() {
  const words = ["Communication", "Success", "Living"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-14 xl:p-24 divide-y">
      <Hero />
      <MainCI />
      <Overview />
      <MainFeature />

      {feature_detail.map((item, index) => (
        <FeatureDetail key={index} data={item} />
      ))}

      <Timeline />

      <div className="h-[40rem] flex flex-col justify-center items-center px-4 w-full ">
        <div className="text-3xl md:text-5xl font-medium !w-full dark:text-white max-w-screen-lg ">
          Better
          <FlipWords words={words} />
          <p className="text-xl md:text-2xl font-normal mt-2">
            Succeeding Together, Thriving as One at Siam Sindhorn
          </p>
        </div>
      </div>
    </main>
  );
}
