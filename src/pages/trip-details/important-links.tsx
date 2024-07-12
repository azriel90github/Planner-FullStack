import { Link2, PlusCircle } from "lucide-react";

export function ImportantLinks() {
  return (
    <div className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="fonte-semibold text-xl">Links Importantes</h2>
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
              <a href="#" className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200">
                https://pt.airbnb.com/angola/stays?_set_bev_on_new_domain=1720701701_EAYTU5YzMwZTU0ZW
              </a>

            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">Regras da Casa</span>
              <a href="#" className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200">
                https://www.notion.so/pt-br
              </a>

            </div>
            <Link2 className="size-5 text-zinc-400 shrink-0" />
          </div>

        </div>

        <button  className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
          <PlusCircle className="size-5" />
          Cadastrar novo link
        </button>
      </div>
    </div>
  )
}