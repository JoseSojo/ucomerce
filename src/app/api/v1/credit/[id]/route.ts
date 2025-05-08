import { NextRequest, NextResponse } from "next/server";
import { deleteCredit, updateCredit } from "../../../../../infrastructure/models/credit.model";
import { CreditUpdateDto  } from "../../../../../domain/dto/credit.dto";

//Funcion DELETE
export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id?: string } }
  ) => {
    try {
      const id = params?.id ? parseInt(params.id, 10) : NaN;
      if (isNaN(id)) return NextResponse.json({ error: 'ID inválido o requerido' }, { status: 400 });
  
      const byecredit = await deleteCredit(id);
      if (!byecredit) return NextResponse.json({ error: 'Crédito no encontrado' }, { status: 404 });
  
      return NextResponse.json({ mensaje: 'Crédito eliminado', data: byecredit });
    } catch (error: any) {
      console.error('Error al eliminar crédito:', error.message);
      return NextResponse.json({ error: 'Error interno al eliminar crédito' }, { status: 500 });
    }
  };
  
  

//Funcion Update
export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const id = parseInt(params?.id, 10);
        if (!id) return NextResponse.json({ error: "ID inválido o requerido" }, { status: 400 });

        const body: CreditUpdateDto = await req.json();
        const actualizado = await updateCredit(id, body);
        if (!actualizado) return NextResponse.json({ error: "Crédito no encontrado" }, { status: 404 });

        return NextResponse.json({ mensaje: "Crédito actualizado correctamente", data: actualizado });
    } catch (error) {
        console.error("Error al actualizar crédito:", error);
        return NextResponse.json({ error: "Error al actualizar crédito." }, { status: 500 });
    }
};


