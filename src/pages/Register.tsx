import React, { useCallback, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Input from "./components/Input";
import { FiMail, FiUser, FiArrowRight, FiBook } from "react-icons/fi";
import "./../styles/pages/register.css";
import { Form } from "@unform/web";
import api from "./../service/api";
import Dropzone from "./components/Dropzone";
import { useHistory } from "react-router-dom";

interface People {
  id: number;
  email: string;
  name: string;
  lastName: string;
  dateBirth: string;
  cpf: string;
  pathImage?: string;
}

const Register: React.FC = () => {
  const [tabAddres, setAddress] = useState(true);
  const [tabImage, setImage] = useState(true);

  const [people_id, setPeople_id] = useState(0);
  //arquivo
  const [selectedFile, setSelectedFile] = useState<File>();

  const history = useHistory();

  const handleSubmitPeople = useCallback(async (data) => {
    await api.post("/people", data).then((resp) => {
      setPeople_id(resp.data.id);
      setAddress(false);
    });
  }, []);

  const handleSubmitAddress = useCallback(
    async (data) => {
      data.people_id = people_id;
      await api.post("/address", data).then((resp) => {
        setImage(false);
      });
    },
    [people_id]
  );

  const handleUpload = useCallback(async () => {
    //Formato para enviar arquivos
    const data = new FormData();
    data.append("people_id", String(people_id));
    if (selectedFile) {
      data.append("photo", selectedFile);
    }

    await api.post("/photos", data);
    history.push('/sucess')
  }, [selectedFile, people_id]);

  return (
    <div id="page-register">
      <div className="content-wrapper">
        <div  className="tabMenu">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabs" >
          <Tab eventKey="home" title="Cadastro" >
            <div className="formPeople">
              <Form onSubmit={handleSubmitPeople}>
                <Input placeholder="E-Mail" name="email" icon={FiMail} />
                <Input placeholder="Name" name="name" icon={FiUser} />
                <Input placeholder="Sobrenome" name="lastName" icon={FiUser} />
                <Input
                  placeholder="02-02-1999"
                  type="date"
                  name="dateBirth"
                  icon={FiUser}
                />
                <Input
                  placeholder="CPF 999.999.999-99"
                  name="cpf"
                  icon={FiUser}
                />
                <button className="enter-register">
                  <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </button>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Endereço" disabled={tabAddres}>
            <div className="formPeople">
              <Form onSubmit={handleSubmitAddress}>
                <Input placeholder="99999-999" name="cep" icon={FiBook} />
                <Input placeholder="Rua" name="street" icon={FiBook} />
                <Input placeholder="Bairro" name="neighborhood" icon={FiBook} />
                <Input
                  placeholder="Complemento"
                  name="complement"
                  icon={FiBook}
                />
                <Input placeholder="Cidade" name="city" icon={FiBook} />
                <Input placeholder="Estado" name="state" icon={FiBook} />
                <button className="enter-register">
                  <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
                </button>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Imagem" disabled={tabImage}>
            <Form onSubmit={handleUpload}>
              <Dropzone onFileUploaded={setSelectedFile} />

              <button className="enter-register">
                <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
              </button>
            </Form>
          </Tab>
        </Tabs>
        </div> 
      </div>
    </div>
  );
};

export default Register;
