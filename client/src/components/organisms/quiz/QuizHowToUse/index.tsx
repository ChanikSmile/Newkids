import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import HowToUseExplainOne from 'components/atoms/quiz/HowToUseExplainOne';
import HowToUseExplainTwo from 'components/atoms/quiz/HowToUseExplainTwo';
import HowToUseExplainThree from 'components/atoms/quiz/HowToUseExplainThree';
import Button from 'components/atoms/common/Button';
import Title from 'components/atoms/quiz/Title';
import { QuizHowToUseContainer } from './style';

interface IQuizHowToUseProps {
	setStep: Dispatch<SetStateAction<number>>;
}

function QuizHowToUse({ setStep }: IQuizHowToUseProps) {
	const [isDone, setIsDone] = useState(false);
	const [num, setNum] = useState(0);
	const handleClick = () => {
		if (!isDone) {
			setStep(2);
			setNum(1);
			setIsDone(true);
		}
	};

	useEffect(() => {
		if (num === 0) {
			setIsDone(false);
		}
	}, [num]);

	return (
		<QuizHowToUseContainer>
			<Title effectText="주간 단어 퀴즈" text=" 이용방법" />
			<HowToUseExplainOne />
			<HowToUseExplainTwo />
			<HowToUseExplainThree />
			<div className="quiz-button">
				<Button size="s" radius="m" color="SubFirst" text="다음" handleClick={handleClick} />
			</div>
		</QuizHowToUseContainer>
	);
}

export default QuizHowToUse;