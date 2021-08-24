import Head from 'next/head';
import { useEffect, useState } from 'react';
import * as Tone from 'tone';
import synthStyles from '../styles/Synth.module.css';

const Synth = () => {
	const [
		synth,
		setSynth
	] = useState(null);

	useEffect(() => {
		getSynth();
	}, []);

	const getSynth = () => {
		const synthType = new Tone.PolySynth(Tone.Synth, {
			oscillator : {
				type : 'triangle8'
			},
			envelope   : {
				attack  : 2,
				decay   : 1,
				sustain : 0.4,
				release : 4
			}
		}).toDestination();

		const comp = new Tone.Compressor(-30, 1);
		const reverb = new Tone.Reverb({
			decay : 15,
			wet   : 0.6
		}).toDestination();
		const chorus = new Tone.Chorus(6, 4, 0.2).toDestination();

		const pingPong = new Tone.PingPongDelay('4n', 0.3).toDestination();
		synthType.fan(comp, reverb, chorus, pingPong);
		synthType.volume.value = -4;
		setSynth(synthType);
	};

	function noteDown (note) {
		try {
			synth.triggerAttackRelease(`${note}`, '16n');
		} catch (e) {
			return;
		}
	}

	function playNote (e) {
		if (e.keyCode === 65) {
			if (!e.repeat) {
				noteDown('C4');
			}
		}
		if (e.keyCode === 87) {
			if (!e.repeat) {
				noteDown('Db4');
			}
		}
		if (e.keyCode === 83) {
			if (!e.repeat) {
				noteDown('D4');
			}
		}
		if (e.keyCode === 69) {
			if (!e.repeat) {
				noteDown('Eb4');
			}
		}
		if (e.keyCode === 68) {
			if (!e.repeat) {
				noteDown('E4');
			}
		}
		if (e.keyCode === 70) {
			if (!e.repeat) {
				noteDown('F4');
			}
		}
		if (e.keyCode === 84) {
			if (!e.repeat) {
				noteDown('Gb4');
			}
		}
		if (e.keyCode === 71) {
			if (!e.repeat) {
				noteDown('G4');
			}
		}
		if (e.keyCode === 89) {
			if (!e.repeat) {
				noteDown('Ab4');
			}
		}
		if (e.keyCode === 72) {
			if (!e.repeat) {
				noteDown('A4');
			}
		}
		if (e.keyCode === 85) {
			if (!e.repeat) {
				noteDown('Bb4');
			}
		}
		if (e.keyCode === 74) {
			if (!e.repeat) {
				noteDown('B4');
			}
		}
		if (e.keyCode === 75) {
			if (!e.repeat) {
				noteDown('C5');
			}
		}
		if (e.keyCode === 79) {
			if (!e.repeat) {
				noteDown('Db5');
			}
		}
		if (e.keyCode === 76) {
			if (!e.repeat) {
				noteDown('D5');
			}
		}
		if (e.keyCode === 80) {
			if (!e.repeat) {
				noteDown('Eb5');
			}
		}
		if (e.keyCode === 186) {
			if (!e.repeat) {
				noteDown('E5');
			}
		}
	}

	if (process.browser) {
		window.addEventListener('keydown', playNote);
	}

	return (
		<div>
			<Head>
				<title>Enjoy 😊</title>
			</Head>
			<h3 className={synthStyles.title}>Use your keyboard, finger(s) or mouse to play!</h3>
			<div className={synthStyles.container}>
				<div className={synthStyles.whitenote} onClick={() => noteDown('C4')}>
					a
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Db4')}>
					w
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('D4')}>
					s
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Eb4')}>
					e
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('E4')}>
					d
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('F4')}>
					f
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Gb4')}>
					t
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('G4')}>
					g
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Ab4')}>
					y
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('A4')}>
					h
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Bb4')}>
					u
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('B4')}>
					j
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('C5')}>
					k
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Db5')}>
					o
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('D5')}>
					l
				</div>
				<div className={synthStyles.blacknote} onClick={() => noteDown('Eb5')}>
					p
				</div>
				<div className={synthStyles.whitenote} onClick={() => noteDown('E5')}>
					;
				</div>
			</div>
		</div>
	);
};

export default Synth;
