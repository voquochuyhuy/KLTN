import React, { useState } from 'react';
import Roulette from 'react-roulette-game';
import './wheel.css';
import highlight_img from './images/hightlight.png';
import pointer_img from './images/pointer.png';
import roulette_img_under_highlight from './images/rou_under_high-final.png';
import roulette_img_on_highlight from './images/rou_on_high.png';

function LuckyWheel() {
	const [prize, setPrize] = useState('');
	const [prizeImg, setPrizeImg] = useState('');
	const [showReward, setShowReward] = useState(false);

	const on_complete = prize => {
		setShowReward(true);
		switch (prize) {
			case 't-shirt':
				setPrize('Áo thun');
				setPrizeImg('t-shirt.png');
				break;
			case 'balo':
				setPrize('Balo');
				setPrizeImg('balo.png');
				break;
			case 'notebook':
				setPrize('Sổ tay');
				setPrizeImg('notebook.png');
				break;
			case 'helmet':
				setPrize('Mũ bảo hiểm');
				setPrizeImg('helmet.png');
				break;
			case 'mask':
				setPrize('Mặt nạ giấy innisfree');
				setPrizeImg('mask.png');
				break;
			case 'serum':
				setPrize('Serum Mamonde Red');
				setPrizeImg('serum.png');
				break;
			default:
				break;
		}
	};

	const roulette_props = {
		roulette_img_under_highlight,
		roulette_img_on_highlight,
		highlight_img,
		pointer_img,
		prize_arr: ['t-shirt', 'serum', 'helmet', 'notebook', 'balo', 'serum'],
		on_complete,
		has_reset: true,
		start_text: 'QUAY'
	};

	return (
		<div className="main">
			<div className="game-box">
				<Roulette {...roulette_props} />
			</div>
			{showReward ? (
				<div>
					<div className="wheel__reward">
						<p>Chúc mừng bạn đã trúng {prize}</p>
						<img src={prizeImg} alt={prize} />
						<button
							className="btn-close"
							onClick={() => {
								setShowReward(false);
								const $ = s => document.querySelector(s);
								$('.reset-btn').click();
							}}
						>
							Đóng
						</button>
					</div>
					<div className="mask" />
				</div>
			) : (
				<div />
			)}
		</div>
	);
}

export default LuckyWheel;
