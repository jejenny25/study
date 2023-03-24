{
  /**
   * Enum 
   */
  // Javascript 
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY":0, "TUESDAY":2, "WEDNESDAY": 3});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuseday' | 'Wednesday';
  enum Days{ 
    Monday = 1, // 아무것도 안 넣으면 0, 문자를 넣고 싶으면 문자를 다 적어줘야함
    Tuseday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Friday);
  let day:Days = Days.Monday;
  day = 1;
  console.log(day)

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday'
}