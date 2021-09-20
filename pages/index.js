import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Header from "../componenes/Header";
import Image from "next/image";
import { useSession, getSessions } from "next-auth/client";
import Login from "../componenes/Login";

export default function Home() {
  const [session] = useSession();
  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Google Doc Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700">Start a new Document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>

          <div>
            rushlight_dante
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700 ">
              <Image
                src="https://links.papareact.com/pju"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              blank
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0 ">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Day Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}
