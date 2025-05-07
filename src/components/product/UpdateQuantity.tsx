import { useEcomerce } from "@/domain/context/EcomerceContext";
import { CartProductDto } from "@/domain/dto/cart.product.dto";
import { Minus, Plus } from "lucide-react";

interface Props {
    product: CartProductDto;
    i: number
}

export default function UpdateQuantity({ product,i }:Props) {

    const {modifyQuantityToCart} = useEcomerce();

    return (
        <div className="flex items-center h-auto space-x-2">
            <button
                onClick={() => modifyQuantityToCart(i, product.quantity - 1)}
                className="p-1 rounded-md hover:bg-[#FFDB58] hover:bg-opacity-20 text-[#FFEA00]"
                disabled={product.quantity <= 1}
            >
                <Minus size={18} />
            </button>
            <span className="w-12 text-center text-[#793205]">{product.quantity}</span>
            <button
                onClick={() => modifyQuantityToCart(i, product.quantity + 1)}
                className="p-1 rounded-md hover:bg-[#FFDB58] hover:bg-opacity-20 text-[#FFEA00]"
                disabled={product.quantity >= product.product.stock}
            >
                <Plus size={18} />
            </button>
        </div>
    )
}
