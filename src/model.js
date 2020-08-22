import image from './assets/image.png'
import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from './classes/blocks'
import { css } from './utils'

const text = `
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor consequuntur vel et quasi maxime temporibus veritatis, dolorum sit earum repellat?
`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 0.5rem 0;display: flex;justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: 500px;'
  }),
  new TextColumnsBlock([
    'Пример по добавлениею title',
    'value: "123" Styles: background: red;color: #fff;text-align: center;',
    'Текст по аналогии: value: "123", styles: padding: 2rem;'
  ], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
  })
]