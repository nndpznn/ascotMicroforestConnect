import { redirect } from "next/navigation";

async function handleContact(formData: FormData) {
  "use server";

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // TODO: send an email, write to a DB, etc.
  console.log({ name, email, message });

  // Redirect back with a simple success flag (optional)
  redirect("/contact?submitted=1");
}

export default function ContactPage() {
  return (
    <div className="mx-[5vw]">
      <h1 className="my-8 text-4xl font-bold">Contact</h1>

      <div className="flex">
        <div id="form" className="w-1/2 mx-3">
          <p className="my-2">Let us know about any opportunities for improvement, any feedback, or compliments :)</p>
          <form action={handleContact} className="rounded-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="mb-1 block text-lg font-medium text-zinc-800"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded bg-[#DAE1DA] px-3 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-[#226E18]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1 block text-lg font-medium text-zinc-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded bg-[#DAE1DA] px-3 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-[#226E18]"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-1 block text-lg font-medium text-zinc-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded bg-[#DAE1DA] px-3 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-[#226E18]"
              />
            </div>

            <button
              type="submit"
              className="rounded bg-[#226E18] px-4 py-2 text-sm font-medium text-white hover:bg-[#1b5a13]"
            >
              Submit
            </button>
          </form>
        </div>

        <div id="idk" className="w-1/2 mx-3">
          <div id="blob" className="bg-[#DAE1DA] rounded-md w-full h-full">

          </div>
        </div>
      </div>

    </div>
  );
}