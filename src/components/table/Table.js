import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root);

    this.listeners = [
      // 'mouseup',
      'mousedown',
      // 'mousemove'
    ]
  }

  toHTML() {
    return createTable(100)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      document.onmousemove = e => {
        const delta = Math.floor(e.pageX - coords.right)
        const value = coords.width + delta
        console.log(value)
        $parent.$el.style.width = `${value}px`
      }

      document.onmouseup = e => {
        document.onmousemove = null
      }
    }
  }
}
