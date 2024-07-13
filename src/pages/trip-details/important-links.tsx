import { Link2, PlusCircle } from "lucide-react";
import { Button } from "../../components/button";

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

        <Button variant="secundary" size="full">
          <PlusCircle className="size-5" />
            Cadastrar novo link
        </Button>
      </div>
    </div>
  )
}