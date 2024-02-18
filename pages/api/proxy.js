import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function handler(req, res) {
  const { method, body } = req;

  if (method === "POST") {
    try {
      const {
        fullName,
        phone,
        email,
        haveWebsite,
        oldWebsite,
        haveCatalog,
        newDomain,
        businessEmail,
        webLanguage,
        webBudget,
      } = body;

      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({
          name: fullName,
          phone: phone,
          email: email,
          email_business: businessEmail,
          website: haveWebsite,
          katalog: haveCatalog,
          newdomain: newDomain,
          olddomain: oldWebsite,
          language: webLanguage,
          budget: webBudget,
        })
      );

      const response = await axios.post(
        `${baseUrl}/bdekspor_api/main/addpreorder`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Waiting list Response:", response.data);
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error("Error fetching reservation data:", error);
      res.status(500).json({
        success: false,
        error: "An error occurred while processing the request.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
