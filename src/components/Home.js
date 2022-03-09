import React from 'react'

const home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1621758322434-7a751a2e5bef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFndnxlbnwwfHwwfHw%3D&w=1000&q=80" class="d-block w-100" alt="..." height="900px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/motorcycle-guy-wearing-helmet-leather-600w-671306356.jpg" class="d-block w-100" alt="..." height="900px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.bikestop.co.uk/media/wysiwyg/home_bottom_banner_a.jpg" class="d-block w-100" alt="..." height="900px" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://i.pinimg.com/originals/ca/3f/04/ca3f044ab40e9912cb4995d01a25426b.jpg" class="d-block w-100" alt="..." height="900px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default home
