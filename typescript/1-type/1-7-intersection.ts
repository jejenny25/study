{
  /**
   * Intersection Type : &
   */
  type Student = {
    name: string;
    score:number;
  }
  type Worker = {
    employeeId:number;
    work: () =>void;
  }
  function internWork(person:Student & Worker){
    console.log(person.name, person.employeeId, person.work())
  }

  internWork({
    name: 'jeje',
    score:1,
    employeeId:100,
    work: () => {}
  })
}