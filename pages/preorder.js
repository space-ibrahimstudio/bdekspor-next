import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import {
  FieldInput,
  FieldWrap,
  FieldSelect,
} from "@/components/user-inputs/inputs";
import { PrimButton } from "@/components/user-inputs/buttons";
import styles from "@/styles/preorder.module.css";
import bg from "@/public/img/display.jpg";

export default function Preorder() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    haveWebsite: "",
    oldWebsite: "",
    haveCatalog: "",
    newDomain: "",
    businessEmail: "",
    webLanguage: "",
    webBudget: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    haveWebsite: "",
    oldWebsite: "",
    haveCatalog: "",
    newDomain: "",
    businessEmail: "",
    webLanguage: "",
    webBudget: "",
  });

  const validateStep = () => {
    const newErrors = {};
    let isValid = true;

    if (step === 1) {
      if (formData.fullName.trim() === "") {
        newErrors.fullName = "Full name is required";
        isValid = false;
      }
      if (formData.phone.trim() === "") {
        newErrors.phone = "Phone number is required";
        isValid = false;
      }
      if (formData.email.trim() === "") {
        newErrors.email = "Email is required";
        isValid = false;
      }
      if (formData.haveWebsite.trim() === "") {
        newErrors.haveWebsite = "This option is required";
        isValid = false;
      } else if (formData.haveWebsite.trim() === "Sudah") {
        if (formData.oldWebsite.trim() === "") {
          newErrors.oldWebsite = "This field is required";
          isValid = false;
        }
      }
      if (formData.haveCatalog.trim() === "") {
        newErrors.haveCatalog = "This option is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (formData.newDomain.trim() === "") {
        newErrors.newDomain = "This field is required";
        isValid = false;
      }
      if (formData.businessEmail.trim() === "") {
        newErrors.businessEmail = "This field is required";
        isValid = false;
      }
      if (formData.webLanguage.trim() === "") {
        newErrors.webLanguage = "This field is required";
        isValid = false;
      }
      if (formData.webBudget.trim() === "") {
        newErrors.webBudget = "This field is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: "",
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep()) {
      try {
        setLoading(true);

        const requestBody = {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          businessEmail: formData.businessEmail,
          haveWebsite: formData.haveWebsite,
          haveCatalog: formData.haveCatalog,
          newDomain: formData.newDomain,
          oldWebsite: formData.oldWebsite,
          webLanguage: formData.webLanguage,
          webBudget: formData.webBudget,
        };

        const response = await axios.post("/api/proxy", {
          ...requestBody,
        });

        console.log("Server Response:", response.data);

        setLoading(false);
        setIsSubmitted(true);
      } catch (error) {
        console.error("Error occurred during submit form:", error);
        setLoading(false);
      }
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <>
      <Head>
        <title>BD Ekspor - Waiting List</title>
        <meta
          name="description"
          content="Waiting List BD Ekspor, Isi formulir dibawah ini dengan lengkap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.preorder}>
        <section className={styles.formSection}>
          <div className={styles.form}>
            <div
              className={styles.formImage}
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            {isSubmitted ? (
              <form
                className={`${styles.formContent} ${
                  isSubmitted ? styles.moveRight : ""
                }`}
                style={{ justifyContent: "center" }}
              >
                <header className={styles.formHead}>
                  <h1 className={styles.formTitleText}>
                    Thank you for your submission!
                  </h1>
                  <h2 className={styles.formSubtitleText}>
                    We have received your information.
                  </h2>
                </header>
              </form>
            ) : (
              <>
                {step === 1 && (
                  <form
                    onSubmit={handleNextStep}
                    className={`${styles.formContent} ${
                      step === 1 ? styles.moveLeft : ""
                    }`}
                  >
                    <header className={styles.formHead}>
                      <h1 className={styles.formTitleText}>
                        Waiting List BD Ekspor
                      </h1>
                      <h2 className={styles.formSubtitleText}>
                        Isi formulir dibawah ini dengan lengkap
                      </h2>
                    </header>
                    <div className={styles.formBodyWrap}>
                      <main className={styles.formBody}>
                        <FieldWrap>
                          <FieldInput
                            variant="label"
                            id="nama-lengkap"
                            labelText="Nama Lengkap"
                            type="text"
                            placeholder="John Doe"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            error={errors.fullName}
                          />
                        </FieldWrap>
                        <FieldWrap>
                          <FieldInput
                            variant="label"
                            id="nomor-telepon"
                            labelText="Nomor Telepon"
                            type="text"
                            placeholder="088xxx"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            error={errors.phone}
                          />
                          <FieldInput
                            variant="label"
                            id="email"
                            labelText="Email"
                            type="email"
                            placeholder="example@gmail.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                          />
                        </FieldWrap>
                        <FieldWrap>
                          <FieldSelect
                            variant="label"
                            id="sudah-punya-website"
                            labelText="Sudah punya website?"
                            name="haveWebsite"
                            value={formData.haveWebsite}
                            onChange={handleChange}
                            error={errors.haveWebsite}
                          >
                            <option value="">Pilih Jawaban</option>
                            <option value="Belum">Belum punya</option>
                            <option value="Sudah">Sudah punya</option>
                          </FieldSelect>
                          <FieldInput
                            variant="label"
                            id="website-lama"
                            labelText="Domain website lama"
                            type="text"
                            placeholder="www.example.com"
                            name="oldWebsite"
                            value={formData.oldWebsite}
                            onChange={handleChange}
                            error={errors.oldWebsite}
                            disabled={
                              formData.haveWebsite === "Belum" ||
                              !formData.haveWebsite.trim()
                            }
                          />
                        </FieldWrap>
                        <FieldWrap>
                          <FieldSelect
                            variant="label"
                            id="sudah-punya-katalog"
                            labelText="Sudah punya katalog?"
                            name="haveCatalog"
                            value={formData.haveCatalog}
                            onChange={handleChange}
                            error={errors.haveCatalog}
                          >
                            <option value="">Pilih Jawaban</option>
                            <option value="Belum">Belum punya</option>
                            <option value="Sudah">Sudah punya</option>
                          </FieldSelect>
                        </FieldWrap>
                      </main>
                    </div>
                    <footer className={styles.formFooter}>
                      <PrimButton
                        color="yellow"
                        text="Lanjutkan"
                        type="submit"
                      />
                    </footer>
                  </form>
                )}
                {step === 2 && (
                  <form
                    onSubmit={handleSubmit}
                    className={`${styles.formContent} ${
                      step === 2 ? styles.moveRight : ""
                    }`}
                  >
                    <header className={styles.formHead}>
                      <h1 className={styles.formTitleText}>
                        Waiting List BD Ekspor
                      </h1>
                      <h2 className={styles.formSubtitleText}>
                        Isi formulir dibawah ini dengan lengkap
                      </h2>
                    </header>
                    <div className={styles.formBodyWrap}>
                      <main className={styles.formBody}>
                        <FieldWrap>
                          <FieldInput
                            variant="label"
                            id="website-baru"
                            labelText="Domain website baru"
                            type="text"
                            placeholder="www.example.com"
                            name="newDomain"
                            value={formData.newDomain}
                            onChange={handleChange}
                            error={errors.newDomain}
                          />
                        </FieldWrap>
                        <FieldWrap>
                          <FieldInput
                            variant="label"
                            id="email-bisnis"
                            labelText="Email bisnis untuk website"
                            type="email"
                            placeholder="mybusiness@example.com"
                            name="businessEmail"
                            value={formData.businessEmail}
                            onChange={handleChange}
                            error={errors.businessEmail}
                          />
                        </FieldWrap>
                        <FieldWrap>
                          <FieldSelect
                            variant="label"
                            id="pilih-bahasa"
                            labelText="Bahasa Website"
                            name="webLanguage"
                            value={formData.webLanguage}
                            onChange={handleChange}
                            error={errors.webLanguage}
                          >
                            <option value="">Pilih Bahasa</option>
                            <option value="ID">Bahasa Indonesia</option>
                            <option value="EN">English Language</option>
                          </FieldSelect>
                          <FieldInput
                            variant="label"
                            id="biaya-website"
                            labelText="Budget website"
                            type="text"
                            placeholder="Masukkan budget"
                            name="webBudget"
                            value={formData.webBudget}
                            onChange={handleChange}
                            error={errors.webBudget}
                          />
                        </FieldWrap>
                      </main>
                    </div>
                    <footer className={styles.formFooter}>
                      <PrimButton
                        variant="hollow-line"
                        color="dark"
                        text="Sebelumnya"
                        onClick={handleBackStep}
                      />
                      <PrimButton
                        color="yellow"
                        text="Kirim Formulir"
                        type="submit"
                        loading={loading}
                      />
                    </footer>
                  </form>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
