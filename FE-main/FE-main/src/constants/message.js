const MESSAGE = Object.freeze({
  id: {
    EMPTY_ERROR: ["아이디를 입력해주세요."],
    DUPLICATE_ERROR: ["이미 존재하는 아이디 입니다."],
    AVAILABLE: ["✅ 사용 가능한 아이디 입니다."],
  },
  password: {
    EMPTY_ERROR: ["비밀번호를 입력해주세요."],
    LENGTH_ERROR: ["비밀번호를 6글자 이상 입력해주세요."],
  },
  password2: {
    EMPTY_ERROR: ["비밀번호를 입력해주세요."],
    MISMATCH_ERROR: ["비밀번호가 불일치 합니다."],
    AVAILABLE: ["✅ 비밀번호가 일치합니다."],
  },
  name: {
    EMPTY_ERROR: ["이름을 입력해주세요."],
  },
  phone: {
    EMPTY_ERROR: ["전화번호를 입력해주세요."],
  },
});

export { MESSAGE };
