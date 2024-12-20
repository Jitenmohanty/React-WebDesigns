import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-6">Say hello</h3>
      <div className="flex items-center space-x-3 text-gray-400">
        <FaMapMarkerAlt />
        <p>2/345 Subhash Nagar, New Delhi 110027 INDIA</p>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <FaPhone />
        <p>+91-9891846187</p>
      </div>
      <div className="flex items-center space-x-3 text-gray-400">
        <FaEnvelope />
        <p>support@websolutioncentre.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;