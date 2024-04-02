import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="h-[32rem] p-5 bg-[url(/images/hero.png)] bg-cover bg-center flex justify-end items-end">
          <div className="bg-black/50 text-white p-5 backdrop-brightness-50 text-3xl max-w-80">
            <h1>Hero</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5 max-w-screen-lg m-auto">
          <div className="bg-slate-100 p-5 flex flex-col gap-5">
            <h2>feature</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              beatae sequi quos, aut harum laudantium laboriosam autem id natus,
              ducimus quaerat ullam assumenda delectus fuga, earum commodi
              consequatur quisquam quo.
            </div>
          </div>

          <div className="bg-slate-100 p-5 flex flex-col gap-5">
            <h2>feature</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              beatae sequi quos, aut harum laudantium laboriosam autem id natus,
              ducimus quaerat ullam assumenda delectus fuga, earum commodi
              consequatur quisquam quo.
            </div>
          </div>

          <div className="bg-slate-100 p-5 flex flex-col gap-5">
            <h2>feature</h2>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              beatae sequi quos, aut harum laudantium laboriosam autem id natus,
              ducimus quaerat ullam assumenda delectus fuga, earum commodi
              consequatur quisquam quo.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
