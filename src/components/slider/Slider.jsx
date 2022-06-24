import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css'
import './animation.css'
export default function Sliders() {
    const content = [
		{
			title: 'Касаба Уюшмалари Ходимлари',
			description:
			'Ўзбекистон касаба уюшмалари ходимлари билан ўтқазилган мажоис хақида бўлиб ўткан анжуман сухбатлари.',
			button: 'Батафсил',
			image: '/assets/images/2055.jpg'
		},
		{
			title: 'Ходимлар розилиги йўлида',
			description:
			'Хабарингиз бор Олий Мажлис Сенати ва Қонунчилик палатаси кенгашларининг қўшма мажлисида жорий йил Конституцияга ўзгартириш ва қўшимчалар киритиш бўйича таклифларни шакллантириш ва ташкилий чора-тадбирларни амалга ошириш юзасидан Конституциявий комиссия ташкил этилди',
			button: 'Батафсил',
			image: '/assets/images/2066.jpg',
		},
		{
			title: 'Устама пули ундирилди',
			description:
			'Ўрганишлар давомида, ҳақиқатан ҳам, унга 2017 йил сентябрь ойидан 2022 йил апрель ойигача бўлган ойлик устамалар тўланмай келина ётгани маълум бўлди.',
			button: 'Батафсил',
			image: '/assets/images/military.jpg',
		}
	];
  return (
    <div>
    <Slider autoplay={3000} className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
				</div>
			))}
		</Slider>
    </div>
  )
}
