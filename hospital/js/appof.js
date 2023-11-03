class Patient {
    constructor(name, surname, finCode, gender, dateOfBirth) {
      this.name = name;
      this.surname = surname;
      this.finCode = finCode;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  class Doctor {
    constructor(name, surname, fieldOfSpecialty) {
      this.name = name;
      this.surname = surname;
      this.fieldOfSpecialty = fieldOfSpecialty;
      this.listOfPatients = [];
    }
  
    patientAdd(patient) {
      this.listOfPatients.push(patient);
    }
  
    patientRemove(patient) {
      this.listOfPatients = this.listOfPatients.filter(p => p !== patient);
    }
  }
  
  class Reservation {
    constructor(doctor, patient, disease, history) {
      this.doctor = doctor;
      this.patient = patient;
      this.disease = disease;
      this.history = history;
    }
  
    reservationInfo() {
      return `${this.doctor.name} - ${this.patient.name} - ${this.disease} - ${this.history}`;
    }
  }
  
  class HospitalManagementSystem {
    constructor() {
      this.patients = [];
      this.doctors = [];
      this.reservations = [];
    }
  
    patientAdd(patient) {
      this.patients.push(patient);
    }
  
    doctorAdd(doctor) {
      this.doctors.push(doctor);
    }
  
    getReservation(doctor, patient, date) {
      
    }
  
    showReservationList() {

    }
  }
  
 let hs= new HospitalSystem();
let doctor1=new Doctor("Nicat","Allahyarov","Bas hekim");
 let doctor2=new Doctor("Resul","Abdullayev","Psixoloq");
let doctor3=new Doctor("İlkin","Mustafayev","Deri xestelikleri");
hs.AddDoctor(doctor1);
hs.AddDoctor(doctor2);
hs.AddDoctor(doctor3);

let Patient1=new Patient("Aytekin","Alxasli",6661234,"qiz",1980);
let Patient2=new Patient("İnal","Quliyev",1111234,"oglan",2001);
let Patient3=new Patient("Cavid","Muxtarov",1234121,"oglan",2003);
let Patient4=new Patient("ELnur","Rzayev",6989875,"oglan",2003);
hs.AddXeste(Patient1);
hs.AddXeste(Patient2);
hs.AddXeste(Patient3);
hs.AddXeste(Patient4);
