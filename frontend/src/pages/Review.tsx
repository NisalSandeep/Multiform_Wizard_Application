import { ArrowLeft } from "lucide-react";

function Review() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 md:px-6">
      <div className="card border border-base-300 bg-base-200 shadow-xl">
        <div className="card-body p-6 md:p-8">
          <h2 className="card-title text-3xl font-bold">Review & submit</h2>
          <p className="mb-5 text-base-content/80">
            Check all details before submitting. Use Edit to go back and change anything.
          </p>

          <div className="mb-6 flex items-center gap-4">
            <div className="avatar placeholder">
              <div className="h-18 w-18 rounded-full bg-primary/20 text-primary">
                <span className="text-4xl font-bold">SJ</span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-semibold">Sarah Johnson</h3>
              <p className="text-xl text-base-content/80">Developer · Engineering</p>
            </div>
          </div>

          <div className="divider my-0" />

          <div className="py-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-xl font-semibold uppercase tracking-wide text-base-content/70">
                Personal info
              </h4>
              <button type="button" className="btn btn-outline px-7">
                Edit
              </button>
            </div>

            <div className="grid max-w-xl grid-cols-[140px_1fr] gap-y-2 text-2xl">
              <span className="font-semibold text-base-content/75">Email</span>
              <span className="font-semibold">sarah@company.com</span>
              <span className="font-semibold text-base-content/75">Role</span>
              <span className="font-semibold">Developer</span>
              <span className="font-semibold text-base-content/75">Department</span>
              <span className="font-semibold">Engineering</span>
            </div>
          </div>

          <div className="divider my-0" />

          <div className="py-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-xl font-semibold uppercase tracking-wide text-base-content/70">
                Skills
              </h4>
              <button type="button" className="btn btn-outline px-7">
                Edit
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="badge badge-soft badge-primary badge-lg">React</span>
              <span className="badge badge-soft badge-primary badge-lg">TypeScript</span>
              <span className="badge badge-soft badge-primary badge-lg">Node.js</span>
              <span className="badge badge-soft badge-primary badge-lg">PostgreSQL</span>
              <span className="badge badge-soft badge-primary badge-lg">REST APIs</span>
            </div>
          </div>

          <div className="divider my-0" />

          <div className="flex items-center justify-between pt-4">
            <button type="button" className="btn btn-outline px-7">
              <ArrowLeft size={18} />
              Back
            </button>
            <button type="button" className="btn btn-outline px-7">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;