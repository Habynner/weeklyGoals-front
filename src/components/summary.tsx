import { CheckCircle, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './ui/in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
        </div>
        <span className="text-lg font-semibold">5 a 10 de Agosto</span>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: 200 }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana
          </span>
          <span>58%</span>
        </div>
        <Separator />

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Treinar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Estudar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Arrumar a casa
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Culto doméstico
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Week summary</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Doming{' '}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar cedo</span>" às 08:20
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "<span className="text-zinc-100">Treinar</span>
                  "
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Culto Doméstico</span>" às
                  Segundas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
