USE [master]
GO
/****** Object:  Database [DAI-Personaje]    Script Date: 1/6/2022 10:36:40 ******/
CREATE DATABASE [DAI-Personaje]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI-Personaje', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Personaje.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI-Personaje_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI-Personaje_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI-Personaje] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI-Personaje].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI-Personaje] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI-Personaje] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI-Personaje] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI-Personaje] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI-Personaje] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI-Personaje] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI-Personaje] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI-Personaje] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI-Personaje] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI-Personaje] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI-Personaje] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI-Personaje] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI-Personaje] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI-Personaje] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI-Personaje] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI-Personaje] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI-Personaje] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI-Personaje] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI-Personaje] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI-Personaje] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI-Personaje] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI-Personaje] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI-Personaje] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI-Personaje] SET  MULTI_USER 
GO
ALTER DATABASE [DAI-Personaje] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI-Personaje] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI-Personaje] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI-Personaje] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI-Personaje] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DAI-Personaje', N'ON'
GO
ALTER DATABASE [DAI-Personaje] SET QUERY_STORE = OFF
GO
USE [DAI-Personaje]
GO
/****** Object:  User [alumno]    Script Date: 1/6/2022 10:36:40 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Peliculas]    Script Date: 1/6/2022 10:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Peliculas](
	[IdPelicula] [int] NOT NULL,
	[Imagen] [nchar](255) NULL,
	[Titulo] [nchar](255) NULL,
	[FechaCreacion] [date] NULL,
	[Calificacion] [int] NULL,
	CHECK (Calificacion <= 5),
 CONSTRAINT [PK_Peliculas] PRIMARY KEY CLUSTERED 
(
	[IdPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 1/6/2022 10:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] NOT NULL,
	[Imagen] [nchar](255) NULL,
	[Nombre] [nchar](255) NULL,
	[Edad] [int] NULL,
	[Peso] [int] NULL,
	[Historia] [nchar](255) NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajesXPeliculas]    Script Date: 1/6/2022 10:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajesXPeliculas](
	[IdPersonaje] [int] NOT NULL,
	[IdPelicula] [int] NOT NULL,
 CONSTRAINT [PK_PersonajesXPeliculas] PRIMARY KEY CLUSTERED 
(
	[IdPersonaje] ASC,
	[IdPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Peliculas] ([IdPelicula], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (1, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdL1FoqRZaCjSPOs00dTYK71MjsKObe6-TA&usqp=CAU                                                                                                                                                            ', N'Pato                                                                                                                                                                                                                                                           ', CAST(N'2000-02-01' AS Date), 1)
INSERT [dbo].[Peliculas] ([IdPelicula], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (2, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdL1FoqRZaCjSPOs00dTYK71MjsKObe6-TA&usqp=CAU                                                                                                                                                            ', N'Patito                                                                                                                                                                                                                                                         ', CAST(N'2000-02-02' AS Date), 2)
INSERT [dbo].[Peliculas] ([IdPelicula], [Imagen], [Titulo], [FechaCreacion], [Calificacion]) VALUES (3, N'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdL1FoqRZaCjSPOs00dTYK71MjsKObe6-TA&usqp=CAU                                                                                                                                                            ', N'Patote                                                                                                                                                                                                                                                         ', CAST(N'2000-02-03' AS Date), 3)
GO
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'A                                                                                                                                                                                                                                                              ', 1, 1, N'A                                                                                                                                                                                                                                                              ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (2, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'B                                                                                                                                                                                                                                                              ', 2, 1, N'AA                                                                                                                                                                                                                                                             ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (3, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'C                                                                                                                                                                                                                                                              ', 3, 1, N'AAA                                                                                                                                                                                                                                                            ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'D                                                                                                                                                                                                                                                              ', 4, 1, N'AAAA                                                                                                                                                                                                                                                           ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (5, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'E                                                                                                                                                                                                                                                              ', 5, 1, N'AAAAA                                                                                                                                                                                                                                                          ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (6, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'F                                                                                                                                                                                                                                                              ', 6, 1, N'AAAAAA                                                                                                                                                                                                                                                         ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (7, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'G                                                                                                                                                                                                                                                              ', 7, 1, N'AAAAAAA                                                                                                                                                                                                                                                        ')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (8, N'https://cf.ltkcdn.net/gatos/images/std/236641-800x515r1-etapas-desarrollo-gatitos.jpg                                                                                                                                                                          ', N'H                                                                                                                                                                                                                                                              ', 8, 1, N'AAAAAAAA                                                                                                                                                                                                                                                       ')
GO
INSERT [dbo].[PersonajesXPeliculas] ([IdPersonaje], [IdPelicula]) VALUES (1, 1)
INSERT [dbo].[PersonajesXPeliculas] ([IdPersonaje], [IdPelicula]) VALUES (2, 2)
INSERT [dbo].[PersonajesXPeliculas] ([IdPersonaje], [IdPelicula]) VALUES (3, 3)
GO
ALTER TABLE [dbo].[PersonajesXPeliculas]  WITH CHECK ADD  CONSTRAINT [FK_PersonajesXPeliculas_Peliculas1] FOREIGN KEY([IdPelicula])
REFERENCES [dbo].[Peliculas] ([IdPelicula])
GO
ALTER TABLE [dbo].[PersonajesXPeliculas] CHECK CONSTRAINT [FK_PersonajesXPeliculas_Peliculas1]
GO
ALTER TABLE [dbo].[PersonajesXPeliculas]  WITH CHECK ADD  CONSTRAINT [FK_PersonajesXPeliculas_Personaje] FOREIGN KEY([IdPersonaje])
REFERENCES [dbo].[Personaje] ([Id])
GO
ALTER TABLE [dbo].[PersonajesXPeliculas] CHECK CONSTRAINT [FK_PersonajesXPeliculas_Personaje]
GO
/****** Object:  StoredProcedure [dbo].[sp_Ej4_listo]    Script Date: 1/6/2022 10:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_Ej4_listo]
@Id int
AS
BEGIN
select * from dbo.Peliculas 
            INNER JOIN dbo.PersonajesXPeliculas on dbo.PersonajesXPeliculas.IdPelicula = dbo.Peliculas.IdPelicula
            INNER JOIN dbo.Personaje on dbo.Personaje.Id = dbo.PersonajesXPeliculas.IdPersonaje
            where dbo.Peliculas.IdPelicula = @Id
END
exec sp_Ej4_listo @Id = 1
	
GO
USE [master]
GO
ALTER DATABASE [DAI-Personaje] SET  READ_WRITE 
GO
