import { useState } from "react";

const CreateMatchForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    entryFee: "",
    prizePool: "",
    gameSettings: {
      gunAttributes: false,
      esportsMode: false,
      defaultLook: false,
      characterSkill: false,
      limitedAmmo: false,
      gun: "",
      grenade: false,
      map: "",
      gameType: ""
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGameSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      gameSettings: {
        ...prev.gameSettings,
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#1a1d24] via-[#13151c] to-[#0f1117] px-4">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gradient-to-br from-[#23262f] to-[#1c1f27] rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10"
      >
        {/* Title */}
        <h2 className="text-white text-2xl font-bold mb-6">
          Create Match
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />

          <input
            type="number"
            name="entryFee"
            placeholder="Entry Fee"
            value={formData.entryFee}
            onChange={handleChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />

          <input
            type="number"
            name="prizePool"
            placeholder="Prize Pool"
            value={formData.prizePool}
            onChange={handleChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />

          <input
            type="text"
            name="gun"
            placeholder="Gun"
            value={formData.gameSettings.gun}
            onChange={handleGameSettingsChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />

          <input
            type="text"
            name="map"
            placeholder="Map"
            value={formData.gameSettings.map}
            onChange={handleGameSettingsChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />

          <input
            type="text"
            name="gameType"
            placeholder="Game Type"
            value={formData.gameSettings.gameType}
            onChange={handleGameSettingsChange}
            className="bg-[#2a2d35] text-white placeholder-white/40 px-4 py-3 rounded-lg outline-none border border-white/10 focus:border-[#8b8fff]"
          />
        </div>

        {/* Checkboxes */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70 text-sm">

          {[
            "gunAttributes",
            "esportsMode",
            "defaultLook",
            "characterSkill",
            "limitedAmmo",
            "grenade"
          ].map((key) => (
            <label key={key} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={key}
                checked={formData.gameSettings[key]}
                onChange={handleGameSettingsChange}
                className="accent-[#8b8fff]"
              />
              <span className="capitalize">{key}</span>
            </label>
          ))}

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-8 w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#8b8fff] to-[#69c9d0] hover:opacity-90 transition"
        >
          Create Match
        </button>
      </form>
    </div>
  );
};

export default CreateMatchForm;