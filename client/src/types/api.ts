// REQUEST

// -- auth :: 로그인 body
export interface LoginApiBody {
	email: string;
	password: string;
}

// -- auth :: 회원가입 body
export interface JoinApiBody {
	email: string;
	password: string;
	name: string;
	age: number;
	nickname: string;
}

// -- auth :: 이메일 인증 번호 전송 body
export interface SendEmailApiBody {
	email: string;
}

// -- auth :: 이메일 인증 번호 확인 body
export interface CertEmailApiBody {
	email: string;
	authNumber: string;
}

//  -- auth :: 이메일 중복 검증 body
export interface CheckEmailApiBody {
	email: string;
}

//  -- auth :: 닉네임 중복 검증 body
export interface CheckNicknameApiBody {
	nickname: string;
}

// -- auth :: 비밀번호 변경
export interface PatchPasswordApiBody {
	currentPwd: string;
	newPwd: string;
}

// -- word :: 단어 등록
export interface RegistWordApiBody {
	wordKey: string;
	word: string;
	description: string;
}

// -- word :: 단어 등록
export interface PatchWordApiBody {
	word: string;
	description: string;
}

// -- article :: 읽은 뉴스기사 등록
export interface RegistReadArticleApiBody {
	articleId: number;
}

// --quiz :: 퀴즈 질문 요청
export interface QuizQuestionRequestApiBody {
	no: string | number;
	word: string;
	description: string;
}

// -- quiz :: 퀴즈 정답 체크
export interface QuizAnswerCheckApiBody {
	answer: string;
}

// -- weeklyquiz :: 주간 키워드 퀴즈 질문 요청
export interface WeeklyQuizQuestionRequestApiBody {
	no: string | number;
	answerword: string;
	description: string;
	contents: string[];
}

// -- weeklyquiz :: 주간 키워드 퀴즈 정답 체크
export interface WeeklyQuizAnswerCheckApiBody {
	answer: string;
}

// RESPONSE
