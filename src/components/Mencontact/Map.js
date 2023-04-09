import React from 'react'

function Map() {
  return (
    <>
        <section id="map" className="map fix">
            <div className="container-fulid">
                <div className="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.01307524694!2d-112.40523132230999!3d33.60509911295008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1616492655751!5m2!1sen!2sin"
                    width={100} height={600} style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Map