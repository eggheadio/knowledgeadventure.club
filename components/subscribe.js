const Subscribe = ({children, formId = '1553751'}) => (
  <>
    <div>{children}</div>

    <div class="w-full max-w-xs">
      <form
        action={`https://app.convertkit.com/forms/${formId}/subscriptions`}
        method="post"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="first_name"
          >
            preferred name
          </label>
          <input
            aria-label="Your preferred name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            name="fields[first_name]"
            placeholder="your preferred name"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email_address"
          >
            email address
          </label>
          <input
            aria-label="Your email address"
            name="email_address"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email_address"
            type="email"
            placeholder="your email address"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Join the Club
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 no spam, no bs, unsubscribe any time 👋
      </p>
    </div>
  </>
)

export default Subscribe
