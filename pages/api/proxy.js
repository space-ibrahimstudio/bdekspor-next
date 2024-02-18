import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function handler(req, res) {
  const { method, body } = req;
  const { endpoint } = body;

  if (method === "POST") {
    try {
      const response = await axios.post(`${baseUrl}${endpoint}`, body);

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
