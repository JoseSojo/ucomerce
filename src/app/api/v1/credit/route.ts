import { NextRequest, NextResponse } from "next/server";
import { createCredit, filterCredits } from "../../../../infrastructure/models/credit.model"; 
import { CreditCreateDto } from "../../../../domain/dto/credit.dto";

// GET - Obtener créditos
export const GET = async (req: NextRequest) => {
    try {
        const resultado = await filterCredits(); //filterCredits para obtener los créditos almacenados

        return NextResponse.json({
            mensaje: "Lista de créditos obtenida exitosamente",
            data: resultado, 
        });
    } catch (error) {
        console.error("Error al obtener créditos:", error);
        return NextResponse.json({ error: "Error al obtener créditos" }, { status: 500 });
    }
};

// POST - Crear un crédito
export const POST = async (req: NextRequest) => {
    try {
        const body: CreditCreateDto = await req.json();

        if (!body.userId || !body.available || !body.limit) {
            return NextResponse.json({
                error: "Faltan datos obligatorios (userId, available, limit)"
            }, { status: 400 });
        }

        const nuevoCredito = await createCredit(body); // obtenemos el crédito recién creado y lo devolvemos

        return NextResponse.json({
            mensaje: "Crédito creado correctamente",
            data: nuevoCredito, 
        });
    } catch (error) {
        console.error("Error al crear crédito:", error);
        return NextResponse.json({ error: "Error al crear crédito" }, { status: 500 });
    }
};
