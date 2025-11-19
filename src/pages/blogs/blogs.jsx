import React from "react";
import Header from "../../components/Header/Header.jsx";
import Particles from "../../components/CanvasBackground/Particles.jsx";
import ProjectScroll from "../projects/ProjectScroll";
import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from "react";
import "./blogs.css"

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    const getBlog = async () => {
        const response = await fetch("http://192.168.0.13:5110/Blog/1");
        const result = await response.json();
        setBlogs(result);
        console.log(result);
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <>
            <div className="games">
                {/* 背景 Canvas */}
                <Canvas
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                >
                    <Particles />
                    <ProjectScroll />
                </Canvas>

                <div>
                    <Header />

                    {/* 博客内容渲染 */}
                    <div className="blog-container">
                        <div className="blog-list">
                            {blogs.length === 0 ? (
                                <p>正在加载博客...</p>
                            ) : (
                                blogs.map(blog => (
                                    <div key={blog.id} className="blog-item">
                                        <h2>{blog.title}</h2>
                                        {blog.imgUrl && <img src={blog.imgUrl} alt={blog.title} />}
                                        <p>{blog.content}</p>
                                        {blog.remark && <small>备注: {blog.remark}</small>}
                                        <p className="blog-date">创建时间: {new Date(blog.createdate).toLocaleString()}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
