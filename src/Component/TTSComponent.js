import React, { Component } from 'react';
import './style.css';

class TTSComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //properti state
        correctAnswers: {
            d1: "ABC",
            m1: "BCA",
            d2: "ETNIS",
            d3: "ADERA",
            m2: "TKA",
            m3: "RAM",
            d4: "LAMPUNG",
            m4: "EROPA",
            m5: "NOBEL",
            d5: "LALAB",
            m6: "LAN",
            d6: "AREN",
            d7: "BALI"
        },
        notification: {
            message: '',
            color: ''
          }
    };
    this.notificationTimeout = null;
  }

  geserCek = (nbtn) => {
        const table = document.querySelectorAll('.' + nbtn);
        if (table[0].disabled == true) {
            this.autoNext(0, nbtn);
        } else {
            table[0].select();
        }

        for (let i = 0; i < table.length; i++) {
            table[i].addEventListener('input', () => {
                if (i == table.length - 1) {
                    var concatString = this.catString(nbtn);
                    this.submitString(concatString, nbtn, table);

                } else if (i == table.length - 2 && table[table.length - 1].disabled == true) {
                    var concatString = this.catString(nbtn);
                    this.submitString(concatString, nbtn, table);

                } else {
                    this.autoNext(i, nbtn);
                    var concatString = this.catString(nbtn);
                    this.submitString(concatString, nbtn, table);
                }

            });

        }
    };
  

  autoNext = (i, cn) => {
        let d = document.querySelectorAll('.' + cn);
        if (d[i + 1].disabled == true) {
            d[i + 2].select();

        } else {
            d[i + 1].select();
        }
    };
  

  catString = (cn) => {
        var concat = "";
        let d = document.querySelectorAll('.' + cn);
        for (let i = 0; i < d.length; i++) {
            concat += d[i].value;
        }
        return concat;
        
    };


  submitString = (concat, tipe, tabel) => {
        if (concat.toUpperCase() == "ABC" && tipe == "d1") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "BCA" && tipe == "m1") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "ETNIS" && tipe == "d2") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "ADERA" && tipe == "d3") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "TKA" && tipe == "m2") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "RAM" && tipe == "m3") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "LAMPUNG" && tipe == "d4") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "EROPA" && tipe == "m4") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "NOBEL" && tipe == "m5") {
           this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "LALAB" && tipe == "d5") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "LAN" && tipe == "m6") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "AREN" && tipe == "d6") {
            this.pengulanganTabel(tabel);
        } else if (concat.toUpperCase() == "BALI" && tipe == "d7") {
            this.pengulanganTabel(tabel);
        }
    };

    componentDidMount() {
        const btns = document.querySelectorAll("body button");
        btns.forEach((btn) => {
          btn.addEventListener('click', () => {
            let namebtn = btn.getAttribute('name');
            this.geserCek(namebtn);
          });
        });
      }

  pengulanganTabel = (table) => {
        for (let j = 0; j < table.length; j++) {
            table[j].disabled = true;
        }
    };

    submitString = (concat, tipe, tabel) => {
        const { correctAnswers } = this.state;
        const correctAnswer = correctAnswers[tipe];
        let notificationMessage = '';
        let notificationColor = '';
    
        if (concat.toUpperCase() === correctAnswer) {
          this.pengulanganTabel(tabel);
          notificationMessage = 'Jawaban benar!';
          notificationColor = 'green';
        } else {
          notificationMessage = 'Jawaban salah. Coba lagi.';
          notificationColor = 'red';
        }
    
        this.setState({
          notification: {
            message: notificationMessage,
            color: notificationColor
          }
        });
        clearTimeout(this.notificationTimeout);
      this.notificationTimeout = setTimeout(() => {
        this.setState({
          notification: {
            message: '',
            color: ''
          }
        });
      }, 2000);
    };

    componentWillUnmount() {
        // Membersihkan timeout saat komponen di-unmount untuk mencegah memory leak
        clearTimeout(this.notificationTimeout);
      }
    

  render() {
    const { message, color } = this.state.notification;
        return (
            <div className="container" style={{ textAlign: 'justify' , backgroundColor: 'pink'}}>
                 {/* Notifikasi */}
                 {message && (
          <div
            className="notification"
            style={{
              backgroundColor: color,
              padding: '10px',
              borderRadius: '5px',
              marginTop: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px', // Menambahkan margin bawah pada notifikasi
            }}
          >
            {message}
          </div>
        )}
        
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Permainan Teka-Teki Silang</h1>
        <div className="row" style={{ marginBottom: '20px' }}> {/* Menambahkan margin bawah pada baris */}
                    <div className="row">
                        <div className="col align-self-center">
                                <h4>Mendatar</h4>
                                <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>1. Nama baterai</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d1"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                                </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>2. Suku Bangsa</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d2"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>3. Nama Penyanyi</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d3"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>4. Provinsi paling selatan di Sumatera</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d4"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>5. Sayuran yang dimakan mentah</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d5"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>6. Pohon jenis palem yang dapat dimakan</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d6"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>7. Objek wisata Indonesia Terpopuler</p>
                                </div>
                                <div class="pr-2"><button type="button" name="d7"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>

                            <h4>Menurun</h4>
                                <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>1. Nama Bank</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m1"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                                </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>2. Tenaga Kerja Asing</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m2"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>3. Random Access Memory</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m3"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>4. Benua Biru</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m4"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>5. Penghargaan Penelitian Luar Biasa</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m5"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                            <div class="d-flex flex-row align-items-baseline">
                                <div class="pr-2">
                                    <p>6. Local Area Network</p>
                                </div>
                                <div class="pr-2"><button type="button" name="m6"
                                    class="btn btn-primary btn-sm align-self-center">PILIH</button>
                                </div>
                            </div>
                        </div>

                        <div className="col" style={{ margin: 'auto', marginTop: '20px' }}>
                        <div className="col">
                            <table className="tabel">
                                <tr>
                                <td className="block"><input className="d1" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d1 m1" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d1" type="text" maxLength="1" /></td>
                                <td className="block"></td>
                                <td className="block"><input className="d2" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d2 m2" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d2" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d2" type="text" maxLength="1" /></td>
                                <td className="block"><input className="d2" type="text" maxLength="1" /></td>
                                </tr>
                                                    
                                                    <tr>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m1" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m2" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m1 d3" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d3" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d3" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d3 m3" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d3 m2" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m3" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"><input className="m4" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="d4" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4 m3" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4 m5" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d4" type="text" maxLength="1" /></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"><input className="m4" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m5" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"><input className="m4" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="d5 m6" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d5" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d5" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d5" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d5 m5" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"><input className="m4" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m6" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="m5" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                    </tr>

                                                    <tr>
                                                        <td className="block"><input className="m4 d6" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d6" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d6" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d6 m6" type="text" maxLength="1" /></td>
                                                        <td className="block"></td>
                                                        <td className="block"><input className="d7" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d7" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d7 m5" type="text" maxLength="1" /></td>
                                                        <td className="block"><input className="d7" type="text" maxLength="1" /></td>
                                                    </tr>
                            </table>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
        );
        
    }
}

export default TTSComponent;