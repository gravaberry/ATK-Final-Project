PGDMP      ,                |            db_atk    16.1    16.1 ,    '           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            (           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            )           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            *           1262    16829    db_atk    DATABASE     �   CREATE DATABASE db_atk WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE db_atk;
                postgres    false            �            1259    16849    departemens    TABLE     �  CREATE TABLE public.departemens (
    id integer NOT NULL,
    kode character varying,
    nama_departemen character varying,
    description character varying,
    is_active smallint,
    created_by integer,
    updated_by integer,
    deleted_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
    DROP TABLE public.departemens;
       public         heap    postgres    false            �            1259    16848    departemens_id_seq    SEQUENCE     �   CREATE SEQUENCE public.departemens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.departemens_id_seq;
       public          postgres    false    220            +           0    0    departemens_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.departemens_id_seq OWNED BY public.departemens.id;
          public          postgres    false    219            �            1259    16840    jenis_barangs    TABLE     �  CREATE TABLE public.jenis_barangs (
    id integer NOT NULL,
    kode character varying,
    nama_barang character varying,
    description character varying,
    is_active smallint,
    created_by integer,
    updated_by integer,
    deleted_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
 !   DROP TABLE public.jenis_barangs;
       public         heap    postgres    false            �            1259    16839    jenis_barangs_id_seq    SEQUENCE     �   CREATE SEQUENCE public.jenis_barangs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.jenis_barangs_id_seq;
       public          postgres    false    218            ,           0    0    jenis_barangs_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.jenis_barangs_id_seq OWNED BY public.jenis_barangs.id;
          public          postgres    false    217            �            1259    16858    lokasis    TABLE       CREATE TABLE public.lokasis (
    id integer NOT NULL,
    kode character varying,
    nama_lokasi character varying,
    description character varying,
    is_active smallint,
    created_by integer,
    updated_by integer,
    deleted_by integer,
    created_at timestamp without time zone,
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);
    DROP TABLE public.lokasis;
       public         heap    postgres    false            �            1259    16857    lokasis_id_seq    SEQUENCE     �   CREATE SEQUENCE public.lokasis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.lokasis_id_seq;
       public          postgres    false    222            -           0    0    lokasis_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.lokasis_id_seq OWNED BY public.lokasis.id;
          public          postgres    false    221            �            1259    16866    satuans    TABLE     �  CREATE TABLE public.satuans (
    id integer DEFAULT nextval('public.jenis_barangs_id_seq'::regclass) NOT NULL,
    kode character varying,
    nama_satuan character varying,
    description character varying,
    created_by integer,
    updated_by integer,
    deleted_by integer,
    created_at timestamp without time zone,
    updated_at timestamp with time zone,
    deleted_at timestamp without time zone,
    is_active smallint
);
    DROP TABLE public.satuans;
       public         heap    postgres    false    217            �            1259    16889    stok_barangs    TABLE     �  CREATE TABLE public.stok_barangs (
    id integer DEFAULT nextval('public.jenis_barangs_id_seq'::regclass) NOT NULL,
    nama_barang character varying(255),
    stok_awal integer,
    stok_keluar integer,
    stok_akhir integer,
    satuan character varying(100),
    is_active integer,
    status integer,
    createad_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer,
    deleted_at timestamp without time zone,
    deleted_by integer,
    departemen character varying(255) DEFAULT NULL::character varying,
    lokasi character varying(255) DEFAULT NULL::character varying,
    keterangan character varying(255) DEFAULT NULL::character varying
);
     DROP TABLE public.stok_barangs;
       public         heap    postgres    false    217            �            1259    16903    test    TABLE     �   CREATE TABLE public.test (
    id integer DEFAULT nextval('public.jenis_barangs_id_seq'::regclass) NOT NULL,
    nama_barang character varying
);
    DROP TABLE public.test;
       public         heap    postgres    false    217            �            1259    16896    test_barangs    TABLE       CREATE TABLE public.test_barangs (
    id integer DEFAULT nextval('public.jenis_barangs_id_seq'::regclass) NOT NULL,
    nama_barang character varying,
    stok_awal integer,
    satuan "char",
    created_at timestamp without time zone,
    created_by integer
);
     DROP TABLE public.test_barangs;
       public         heap    postgres    false    217            �            1259    16830    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    password character varying(255) NOT NULL,
    nama character varying(50) NOT NULL,
    alamat text,
    tanggal_lahir date,
    email character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16835    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    215            .           0    0    user_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
          public          postgres    false    216            q           2604    16852    departemens id    DEFAULT     p   ALTER TABLE ONLY public.departemens ALTER COLUMN id SET DEFAULT nextval('public.departemens_id_seq'::regclass);
 =   ALTER TABLE public.departemens ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            p           2604    16843    jenis_barangs id    DEFAULT     t   ALTER TABLE ONLY public.jenis_barangs ALTER COLUMN id SET DEFAULT nextval('public.jenis_barangs_id_seq'::regclass);
 ?   ALTER TABLE public.jenis_barangs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            r           2604    16861 
   lokasis id    DEFAULT     h   ALTER TABLE ONLY public.lokasis ALTER COLUMN id SET DEFAULT nextval('public.lokasis_id_seq'::regclass);
 9   ALTER TABLE public.lokasis ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            o           2604    16836    users id    DEFAULT     c   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215                      0    16849    departemens 
   TABLE DATA           �   COPY public.departemens (id, kode, nama_departemen, description, is_active, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    220   D7                 0    16840    jenis_barangs 
   TABLE DATA           �   COPY public.jenis_barangs (id, kode, nama_barang, description, is_active, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    218   88                  0    16858    lokasis 
   TABLE DATA           �   COPY public.lokasis (id, kode, nama_lokasi, description, is_active, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at) FROM stdin;
    public          postgres    false    222   <9       !          0    16866    satuans 
   TABLE DATA           �   COPY public.satuans (id, kode, nama_satuan, description, created_by, updated_by, deleted_by, created_at, updated_at, deleted_at, is_active) FROM stdin;
    public          postgres    false    223   :       "          0    16889    stok_barangs 
   TABLE DATA           �   COPY public.stok_barangs (id, nama_barang, stok_awal, stok_keluar, stok_akhir, satuan, is_active, status, createad_at, created_by, updated_at, updated_by, deleted_at, deleted_by, departemen, lokasi, keterangan) FROM stdin;
    public          postgres    false    224   �:       $          0    16903    test 
   TABLE DATA           /   COPY public.test (id, nama_barang) FROM stdin;
    public          postgres    false    226   Z;       #          0    16896    test_barangs 
   TABLE DATA           b   COPY public.test_barangs (id, nama_barang, stok_awal, satuan, created_at, created_by) FROM stdin;
    public          postgres    false    225   �;                 0    16830    users 
   TABLE DATA           [   COPY public.users (id, username, password, nama, alamat, tanggal_lahir, email) FROM stdin;
    public          postgres    false    215   �;       /           0    0    departemens_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.departemens_id_seq', 9, true);
          public          postgres    false    219            0           0    0    jenis_barangs_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.jenis_barangs_id_seq', 53, true);
          public          postgres    false    217            1           0    0    lokasis_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.lokasis_id_seq', 7, true);
          public          postgres    false    221            2           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 1, true);
          public          postgres    false    216                       2606    16856    departemens departemens_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.departemens
    ADD CONSTRAINT departemens_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.departemens DROP CONSTRAINT departemens_pkey;
       public            postgres    false    220            }           2606    16847     jenis_barangs jenis_barangs_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.jenis_barangs
    ADD CONSTRAINT jenis_barangs_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.jenis_barangs DROP CONSTRAINT jenis_barangs_pkey;
       public            postgres    false    218            �           2606    16865    lokasis lokasis_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.lokasis
    ADD CONSTRAINT lokasis_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.lokasis DROP CONSTRAINT lokasis_pkey;
       public            postgres    false    222            �           2606    16872    satuans satuans_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.satuans
    ADD CONSTRAINT satuans_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.satuans DROP CONSTRAINT satuans_pkey;
       public            postgres    false    223            �           2606    16895    stok_barangs stok_barangs_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.stok_barangs
    ADD CONSTRAINT stok_barangs_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.stok_barangs DROP CONSTRAINT stok_barangs_pkey;
       public            postgres    false    224            �           2606    16902    test_barangs test_barang_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.test_barangs
    ADD CONSTRAINT test_barang_pkey PRIMARY KEY (id);
 G   ALTER TABLE ONLY public.test_barangs DROP CONSTRAINT test_barang_pkey;
       public            postgres    false    225            �           2606    16909    test test_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.test DROP CONSTRAINT test_pkey;
       public            postgres    false    226            {           2606    16838    users user_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    215               �   x�u��n� D���R��c�9�F�A��R�����U��������Ho��|�ƴ��c`�S��q��d6�c,T�#�Jp�N\�DǨ5R��F����Dq���q��kD�_X�C�"#��VXf,6ͮ�0bJ3"C��W_l�qB�F���rG��c��%���a�	�͓wi7�3Fi�6$���%�^_���w����d��F��6e�lrS��;u��Qo�6r;��i��Vc)         �   x�u�M�� ���)|�� ������@��b�n����N�.:M�A��{湄>�u��� ��ůQ�R�Du*�P*#�Q�KQ�#��D�ȷ�F밡����H���A�]�.LcXy�< K��/����*����wݎME��OS���U��BØ`�]�3�1xL�|�B�������jM��Qk5P��a�S��p�g��j���!E�}��(+�؃�f�i�%O���Y9$�ڈ3����GQ7	_g�          �   x�}�K� ���)�@ã�ٍ�1v*��M��4j�6��g�o����z�8.�
�e����1����@>��l kS�B� r��p��Ɇ��'�3o�|���'�CEW+\.U����5"a���|��4�+��孡�jޗ'� ��`� ��@
m����˗c3�%i�ƁLOa�Q�I)���V      !   �   x�mN��0;�_����<{C�b�!`7��;�Nh1�����Ե����۹hps� �6FK��I���-$`��*���-���.��9�߸�j����&�q}]j��*k���f?|�7������@��G�_q�k@����8�,�;���J�7E;9      "   �   x�uο
�0����y��]���f��$��\�:�R����R�[>|�
����So��+A��
�2$5y�޸�,܆~�����?eQ	���"���-�Ԭ�
�m�2��:�`�Ol�呤�z�?#�3�0UQZ5��8�[M �-�/_(>U      $      x�34�t
�Up��������� *��      #      x�34�t
�Up������#�=... s��         �   x���
�0 ���;xul��L� T�\t��E���*߾�z,	�=�"�W�E]h��lL��	U��u]N�eļ]���R�Y��"��Ý��(�k ;o��j��lz�����ά�nV 2M�PġL��;3��`{x����)�6X/�     