import { useState, useEffect } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function Personal() {
  useEffect(() => {
    const fetchData = async () => {
      const personalId = localStorage.getItem("personalId");

      if (!personalId) {
        return;
      }

      try {
        const response = await api.get(`/personal/${personalId}`);
        console.log("Fetched personal data:", response.data);
        if (response.status >= 200 && response.status < 300) {
          const { name, email, role, department } = response.data;
          if (response.data?._id) {
            localStorage.setItem("personalId", response.data._id);
          }
          setFormData({ name, email, role, department });
        } else {
          toast.error("Failed to fetch personal data");
        }
      } catch (error) {
        localStorage.removeItem("personalId");
        toast.error("Failed to fetch personal data. Please try again.");
        console.error("Error fetching personal data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  });

  const roles: { [key: string]: string } = {
    SoftwareEngineer: "Software Engineer",
    ProductManager: "Product Manager",
    Designer: "Designer",
    QAEngineer: "QA Engineer",
  };

  const departments: { [key: string]: string } = {
    Engineering: "Engineering",
    Product: "Product",
    Design: "Design",
    Operations: "Operations",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const storedPersonalId = localStorage.getItem("personalId");
      let response;

      if (storedPersonalId) {
        try {
          response = await api.put(`/personal/${storedPersonalId}`, formData);
        } catch (error: any) {
          if (error?.response?.status === 404) {
            localStorage.removeItem("personalId");
            response = await api.post("/personal", formData);
          } else {
            throw error;
          }
        }
      } else {
        response = await api.post("/personal", formData);
      }

      console.log("Form data submitted successfully:", response.data);

      const savedPersonal = response.data?.personal ?? response.data;
      const savedPersonalId = savedPersonal?._id;

      if (savedPersonalId) {
        localStorage.setItem("personalId", savedPersonalId);
      }

      if (response.status >= 200 && response.status < 300) {
        toast.success(
          response.data?.message ||
            "Personal information submitted successfully!",
        );
        // Optionally, you can reset the form or navigate to the next step here
        navigate("/skill");
      } else {
        toast.error(response.data?.message || "Failed to submit form data");
      }
    } catch (error) {
      toast.error("Failed to submit form data. Please try again.");
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 md:px-6">
      <div className="card border border-base-300 bg-base-200 shadow-xl">
        <div className="card-body p-6 md:p-8">
          <h2 className="card-title text-3xl font-bold">
            Personal information
          </h2>
          <p className="mb-4 text-base-content/80">
            Tell us about the new team member joining your organisation.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label" htmlFor="fullName">
                <span className="label-text text-base font-semibold">
                  Full name <span className="text-error">*</span>
                </span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Sarah Johnson"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="emailAddress">
                <span className="label-text text-base font-semibold">
                  Email address <span className="text-error">*</span>
                </span>
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="e.g. sarah@company.com"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="form-control">
                <label className="label" htmlFor="role">
                  <span className="label-text text-base font-semibold">
                    Role <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  id="role"
                  className="select select-bordered w-full"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  {Object.entries(roles).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control">
                <label className="label" htmlFor="department">
                  <span className="label-text text-base font-semibold">
                    Department <span className="text-error">*</span>
                  </span>
                </label>
                <select
                  id="department"
                  className="select select-bordered w-full"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select department
                  </option>
                  {Object.entries(departments).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button type="submit" className="btn btn-outline px-8">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Personal;
