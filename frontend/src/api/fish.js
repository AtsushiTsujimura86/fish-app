let fish_list = [
    { id: 1, name: "Goldfish" },
    { id: 2, name: "Tuna" }
];  // 魚のリスト、メモリ上で保存

export default function handler(req, res) {
    console.log("!!!!!!!!!!!!!!!!!!!!!")
    console.log(req, res)
  if (req.method === "GET") {
      res.status(200).json(fish_list);
  } else if (req.method === "POST") {
      const { name } = req.body;
      if (!name) {
          return res.status(400).json({ error: "Needs fish name" });
      }
      fish_list.push({ id: fish_list.length + 1, name });
      res.status(201).json({ message: "Added new fish", fish_list });
  } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}