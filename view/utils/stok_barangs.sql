--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

-- Started on 2024-03-29 13:08:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16874)
-- Name: stok_barangs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stok_barangs (
    id integer NOT NULL,
    nama_barang character varying(255),
    nama_karyawan character varying(255),
    departemen integer,
    lokasi integer,
    stok_awal integer,
    stok_keluar integer,
    stok_akhir integer,
    satuan character varying(255),
    is_active integer,
    status integer,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer,
    deleted_at timestamp without time zone,
    deleted_by integer
);


ALTER TABLE public.stok_barangs OWNER TO postgres;

--
-- TOC entry 4850 (class 0 OID 16874)
-- Dependencies: 224
-- Data for Name: stok_barangs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stok_barangs (id, nama_barang, nama_karyawan, departemen, lokasi, stok_awal, stok_keluar, stok_akhir, satuan, is_active, status, created_at, created_by, updated_at, updated_by, deleted_at, deleted_by) FROM stdin;
\.


--
-- TOC entry 4706 (class 2606 OID 16878)
-- Name: stok_barangs stok_barangs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stok_barangs
    ADD CONSTRAINT stok_barangs_pkey PRIMARY KEY (id);


-- Completed on 2024-03-29 13:08:05

--
-- PostgreSQL database dump complete
--

