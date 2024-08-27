const Footer = () => {
  return (
    <div>
      <footer className="bg-[#191919] text-base-content p-10">
        <div className="grid grid-cols-4 max-w-7xl mx-auto">
          <aside>
            <h1 className="text-4xl font-bold">CareerHub</h1>
            <p className="mt-4">
              There are many variations of passages <br />
              of Lorem Ipsum , but the majority have <br />
              suffered alteration in some form.
            </p>
          </aside>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
