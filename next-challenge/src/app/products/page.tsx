import Order from "@/components/Contact";
import AllProducts from "@/components/productsLists";
import Testimonial from "@/components/testimoni";

export default function Products() {
    return(
        <div className="bg-gradient-to-tl from-neutral-400">
          <AllProducts/>
          <div className="flex flex-col text-center pt-3 gap-8">
            <Order/>
          <Testimonial />
        </div>            
      </div>
    )
}
