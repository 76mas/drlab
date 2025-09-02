
import Container from "./Container"
const Hello=()=>{
    return(<>
    
       <section
        id=""
        className=" h-full -mt-40  md:-mt-10 lg:-mt-10 z-50 m-0 p-0 min-h-[100vh] flex  w-full flex-col items-center relative "
      >
        <div className="flex w-full h-full items-center justify-center">
          <Container>
            <div className="w-full h-full relative flex justify-center">
              <img
                src="/img/tabledrlab.png"
                className="z-30"
                alt="table"
                loading="lazy"
              />

              <img
                className=" clas absolute hello -top-[183Px] left-30"
                src="/img/hello.png"
                alt="hello"
                loading="lazy"
              />
            </div>
          </Container>
        </div>
      </section></>)
}



export default Hello;