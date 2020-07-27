const Subscribe = ({children, formId = '1553751'}) => (
  <>
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          ⚔️ Ready for a Knowledge Adventure?
          <br className="hidden sm:inline" />
          <span className="text-blue-600" id="newsletter-headline">
            Sign up to learn more.
          </span>
        </h2>
        <form
          action={`https://app.convertkit.com/forms/${formId}/subscriptions`}
          method="post"
          className="mt-8 sm:flex"
          aria-labelledby="newsletter-headline"
        >
          <input
            aria-label="Your email address"
            name="email_address"
            id="email_address"
            type="email"
            placeholder="your email address"
            required
            className="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Join the Adventure
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs pt-3">
          &copy;2020 no spam, no bs, unsubscribe any time 👋
        </p>
      </div>
    </div>
  </>
)

export default Subscribe
