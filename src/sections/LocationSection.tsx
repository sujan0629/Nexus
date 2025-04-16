import ResponsiveWrapper from "@/components/Wrapper";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  return (
    <section className="py-16 bg-white">
      <ResponsiveWrapper>
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          <div className="flex-1 space-y-8 w-full">
            <div className="space-y-4 text-center lg:text-left">
              <h4 className="text-primary font-medium tracking-widest">LOCATION</h4>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Event Venue: The Royal Crown Party Palace, Mahendranagar
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Join us at the premier tech venue in Mahendranagar for an unforgettable experience featuring cutting-edge technology exhibitions, competitions, and networking opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Venue Address</h3>
                  <p className="text-gray-600">
                    The Royal Crown Party Palace<br />
                    X5P8+W37, Bhimdatta 10400
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <CalendarDays className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Event Dates</h3>
                  <p className="text-gray-600">
                    May 2025 onwards<br />
                    Daily for 7 days
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
              <Button className="w-full sm:w-[200px]">Get Directions</Button>
              <Button className="w-full sm:w-[200px]">Download Schedules</Button>
            </div>
          </div>

         
          <div className="flex-1 w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg border border-amber-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.074246099013!2d80.16836746178066!3d28.98517082537173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1ab005a3a7459%3A0x59e60d14c36149d1!2sThe%20Royal%20Crown%20Party%20Palace!5e0!3m2!1sen!2snp!4v1744371803892!5m2!1sen!2snp"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="bg-gray-100"
            ></iframe>
          </div>
        </div>

      
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-amber-50 rounded-xl">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Hours</h3>
            <p className="text-gray-600">
              9:00 AM - 6:00 PM Daily<br />
              Special evening events until 9:00 PM
            </p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Parking Info</h3>
            <p className="text-gray-600">
              Parking available<br />
              Free of Cost
            </p>
          </div>

          <div className="text-center p-6 bg-amber-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nearby Hotels</h3>
            <p className="text-gray-600">
              Special rates for attendees<br />
              Free Staying facility will be announced soon!
            </p>
          </div>
        </div>
      </ResponsiveWrapper>
    </section>
  );
}
