import { SamsaFont, SamsaFontAxes } from '@/types'
import { opinion } from '@/composables/states'
import { useRelativeTime } from '@/composables/relativeTime'

export const glyphMethods = {
  getAxisByIndex: (index: number) =>
    opinion.form.attributes.axes[opinion.font.axes[index]?.tag],
  getAxis: (tag: string) => opinion.form.attributes.axes[tag],
  getFontVariations: (index: number) =>
    opinion.form.attributes.axes
      ? Object.entries(opinion.form.attributes.axes).map(
          (e) => `'${e[0]}' ${e[1][index]}`
        )
      : [],
  getTupleValue: (index: number) =>
    opinion.form.attributes.axes
      ? Object.values(opinion.form.attributes.axes).map(
          (e, i) => e[index] / opinion.font.axes[i]?.max
        )
      : [],
  toggleGlyph: (id: number, value: boolean = null) => {
    const add = !!value || !opinion.form.attributes.glyphs.includes(id)
    add
      ? opinion.form.attributes.glyphs.push(id)
      : (opinion.form.attributes.glyphs = opinion.form.attributes.glyphs.filter(
          (e: number) => e !== id
        ))
  },
  getGlyphsById: (glyphs: number[], font: SamsaFont): string => {
    const map = font?.cmapReverse
    if (!glyphs || !map) return ''
    return glyphs
      .map((id): string => {
        if (!(id in map)) {
          const SamsaGlyph = font.glyphs[id]
          const lig = SamsaGlyph?.openType.lig
          if (lig) return lig
          id = SamsaGlyph?.openType.base
        }
        return String.fromCharCode(map[id])
      })
      .join('')
  },

  setPosition: () => {
      opinion.form.attributes.axes = opinion.font?.axes.reduce((acc: Object, curr: SamsaFontAxes) => ({ ...acc, [curr.tag]: [curr.min, curr.max] }), {});
    },
}
export const utils = {
  invertObject: (object: Object) => {
    if (!object) return
    return Object.keys(object).reduce((ret, key) => {
      ret[object[key]] = key
      return ret
    }, {})
  },
  relativeTime(time: string) {
    return useRelativeTime(time)
  },
}
