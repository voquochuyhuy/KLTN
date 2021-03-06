USE [master]
GO
/****** Object:  Database [KLTN]    Script Date: 12/4/2020 12:33:25 PM ******/
CREATE DATABASE [KLTN]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'KLTN', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\KLTN.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'KLTN_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\KLTN_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [KLTN] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [KLTN].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [KLTN] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [KLTN] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [KLTN] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [KLTN] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [KLTN] SET ARITHABORT OFF 
GO
ALTER DATABASE [KLTN] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [KLTN] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [KLTN] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [KLTN] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [KLTN] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [KLTN] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [KLTN] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [KLTN] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [KLTN] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [KLTN] SET  DISABLE_BROKER 
GO
ALTER DATABASE [KLTN] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [KLTN] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [KLTN] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [KLTN] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [KLTN] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [KLTN] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [KLTN] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [KLTN] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [KLTN] SET  MULTI_USER 
GO
ALTER DATABASE [KLTN] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [KLTN] SET DB_CHAINING OFF 
GO
ALTER DATABASE [KLTN] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [KLTN] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [KLTN] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [KLTN] SET QUERY_STORE = OFF
GO
USE [KLTN]
GO
/****** Object:  Table [dbo].[Badges]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Badges](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Content] [nvarchar](255) NULL,
	[DateAchieved] [date] NULL,
	[Reputation] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostId] [int] NULL,
	[Score] [int] NULL,
	[Content] [text] NULL,
	[CreationDate] [date] NULL,
	[UserDisplayName] [nvarchar](255) NULL,
	[UserId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Logs]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Logs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TypeId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[CreateDate] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LogType]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LogType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PendingFlags]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PendingFlags](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FlagTypeId] [int] NULL,
	[PostId] [int] NULL,
	[CreationDate] [date] NULL,
	[CloseReasonTypeId] [int] NULL,
	[CloseAsOffTopicReasonTypeId] [int] NULL,
	[DuplicateOfQuestionId] [int] NULL,
	[BelongsOnBaseHostAddress] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostFeedback]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostFeedback](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostId] [int] NULL,
	[UserId] [int] NULL,
	[IsAnonymous] [int] NULL,
	[Content] [text] NULL,
	[CreationDate] [date] NULL,
	[isAcceptedAnswer] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostHistory]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostHistory](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostHistoryTypeId] [int] NULL,
	[PostId] [int] NULL,
	[RevisionGUID] [int] NULL,
	[CreationDate] [date] NULL,
	[UserId] [int] NULL,
	[UserDisplayName] [int] NULL,
	[Comment] [text] NULL,
	[Content] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PostLinks]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostLinks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreationDate] [date] NULL,
	[PostId] [int] NULL,
	[RelatedPostId] [int] NULL,
	[LinkTypeId] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostTypeId] [int] NULL,
	[ParentId] [int] NULL,
	[CreationDate] [date] NULL,
	[Score] [int] NULL,
	[ViewCount] [int] NULL,
	[OwnerUserId] [int] NULL,
	[LastEditorUserId] [int] NULL,
	[LastEditorDisplayName] [nvarchar](255) NULL,
	[LastActivityDate] [date] NULL,
	[Title] [nvarchar](255) NULL,
	[Tags] [nvarchar](255) NULL,
	[AnswerCount] [int] NULL,
	[CommentCount] [int] NULL,
	[FavouriteCount] [int] NULL,
	[ClosedDate] [date] NULL,
	[CommunityOwnedDate] [date] NULL,
	[isAudioQuestion] [int] NULL,
	[Content] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReviewRejectionReasons]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReviewRejectionReasons](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Descriptions] [text] NULL,
	[PostTypeId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReviewTaskResults]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReviewTaskResults](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ReviewTaskId] [int] NULL,
	[ReviewTaskResultTypeId] [int] NULL,
	[CreationDate] [date] NULL,
	[RejectionReasonId] [int] NULL,
	[Comment] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReviewTasks]    Script Date: 12/4/2020 12:33:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReviewTasks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ReviewTaskTypeId] [int] NULL,
	[CreationDate] [date] NULL,
	[DeletionDate] [date] NULL,
	[ReviewTaskStateId] [int] NULL,
	[PostId] [int] NULL,
	[SuggestedEditId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReviewTaskStates]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReviewTaskStates](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ReviewTaskStatesName] [nvarchar](255) NULL,
	[Descriptions] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SuggestedEdits]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SuggestedEdits](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostId] [int] NULL,
	[CreationDate] [int] NULL,
	[ApprovalDate] [date] NULL,
	[RejectionDate] [date] NULL,
	[OwnerUserId] [int] NULL,
	[Comment] [text] NULL,
	[Content] [text] NULL,
	[Title] [nvarchar](255) NULL,
	[Tags] [nvarchar](255) NULL,
	[RevisionGUID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SuggestedEditVotes]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SuggestedEditVotes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SuggestedEditId] [int] NULL,
	[UserId] [int] NULL,
	[VoteTypeId] [int] NULL,
	[CreationDate] [date] NULL,
	[TargetUserId] [int] NULL,
	[TargetRepChange] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tags]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tags](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TagName] [nvarchar](255) NULL,
	[CountNumber] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TagSynonyms]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TagSynonyms](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SourceTagName] [nvarchar](255) NULL,
	[TargetTagName] [nvarchar](255) NULL,
	[CreationDate] [int] NULL,
	[OwnerUserId] [int] NULL,
	[AutoRenameCount] [int] NULL,
	[LastAutoRename] [date] NULL,
	[Score] [int] NULL,
	[ApprovedByUserId] [int] NULL,
	[ApprovalDate] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserAdmin]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserAdmin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [varchar](255) NOT NULL,
	[PasswordHash] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CreationDate] [date] NULL,
	[DisplayName] [nvarchar](255) NULL,
	[LastAccessDate] [date] NULL,
	[WebsiteUrl] [nvarchar](255) NULL,
	[Region] [nvarchar](255) NULL,
	[AboutMe] [text] NULL,
	[UpVotes] [int] NULL,
	[DownVotes] [int] NULL,
	[ProfileImageUrl] [text] NULL,
	[Email] [text] NULL,
	[Age] [int] NULL,
	[Account] [varchar](255) NULL,
	[PasswordHash] [text] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Votes]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Votes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[PostId] [int] NULL,
	[VoteTypeId] [int] NULL,
	[UserId] [int] NULL,
	[CreationDate] [date] NULL,
	[BountyAmount] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VoteType]    Script Date: 12/4/2020 12:33:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VoteType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[VoteValue] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Badges] ON 

INSERT [dbo].[Badges] ([Id], [UserId], [Content], [DateAchieved], [Reputation]) VALUES (1, 1, N'Bronze', CAST(N'2020-10-01' AS Date), 100)
INSERT [dbo].[Badges] ([Id], [UserId], [Content], [DateAchieved], [Reputation]) VALUES (2, 2, N'Sliver', CAST(N'2020-10-01' AS Date), 100)
SET IDENTITY_INSERT [dbo].[Badges] OFF
SET IDENTITY_INSERT [dbo].[Comments] ON 

INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (7, 1, 0, N'Her people had not created the path—it had always been there', CAST(N'2020-10-01' AS Date), NULL, 2)
INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (8, 2, 0, N'and their livelihood took them on a continual journey', CAST(N'2020-10-01' AS Date), NULL, 1)
INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (9, 3, 0, N'and their livelihood took them on a continual journey', CAST(N'2020-10-01' AS Date), NULL, 2)
INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (10, 4, 0, N'gathered salt from the great salt beds beside the sea', CAST(N'2020-10-01' AS Date), NULL, 1)
INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (11, 5, 0, N'and simple lean-tos, while a band of fifteen or so of the heartier members', CAST(N'2020-10-01' AS Date), NULL, 2)
INSERT [dbo].[Comments] ([Id], [PostId], [Score], [Content], [CreationDate], [UserDisplayName], [UserId]) VALUES (12, 6, 0, N' In return for salt, these people would give Lara’s people dried meat', CAST(N'2020-10-01' AS Date), NULL, 2)
SET IDENTITY_INSERT [dbo].[Comments] OFF
SET IDENTITY_INSERT [dbo].[LogType] ON 

INSERT [dbo].[LogType] ([Id], [Name]) VALUES (1, N'ask')
INSERT [dbo].[LogType] ([Id], [Name]) VALUES (2, N'comment')
INSERT [dbo].[LogType] ([Id], [Name]) VALUES (3, N'vote')
INSERT [dbo].[LogType] ([Id], [Name]) VALUES (4, N'register')
INSERT [dbo].[LogType] ([Id], [Name]) VALUES (5, N'other')
SET IDENTITY_INSERT [dbo].[LogType] OFF
SET IDENTITY_INSERT [dbo].[PostFeedback] ON 

INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (1, 1, 1, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (2, 2, 1, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (3, 3, 2, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (4, 4, 2, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (5, 5, 2, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
INSERT [dbo].[PostFeedback] ([Id], [PostId], [UserId], [IsAnonymous], [Content], [CreationDate], [isAcceptedAnswer]) VALUES (6, 6, 2, NULL, N'oon Lara spotted other landmarks—an outcropping of limestone beside the path that had a silhouette like a man’s face, a marshy spot beside the river where the waterfowl were easily startled, a tall tree that looked like a man with his arms upraised', CAST(N'2020-10-01' AS Date), 0)
SET IDENTITY_INSERT [dbo].[PostFeedback] OFF
SET IDENTITY_INSERT [dbo].[Posts] ON 

INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (1, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'What is different between this and that', N'What', 0, 0, 0, NULL, NULL, 0, N'could you please explain for me clearly what is the different between them and give some example')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (2, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'What is different between study and learn', N'What', 0, 0, 0, NULL, NULL, 0, N'could you please explain for me clearly what is the different between them and give some example')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (3, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'Some common greeting like hi or hello', N'Some', 0, 0, 0, NULL, NULL, 0, N'I need some greeting like hi and hello ')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (4, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'What does wtf mean', N'What', 2, 4, 0, NULL, NULL, 0, N'Pls explain the meaning for me, thank you')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (5, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'What does fyi mean', N'What', 2, 4, 0, NULL, NULL, 0, N'Pls explain the meaning for me, thank you')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (6, 1, NULL, CAST(N'2020-10-01' AS Date), 20, 20, 1, 1, N'Huy', CAST(N'2020-10-01' AS Date), N'What does etc mean', N'What', 1, 3, 0, NULL, NULL, 0, N'Pls explain the meaning for me, thank you')
INSERT [dbo].[Posts] ([Id], [PostTypeId], [ParentId], [CreationDate], [Score], [ViewCount], [OwnerUserId], [LastEditorUserId], [LastEditorDisplayName], [LastActivityDate], [Title], [Tags], [AnswerCount], [CommentCount], [FavouriteCount], [ClosedDate], [CommunityOwnedDate], [isAudioQuestion], [Content]) VALUES (7, NULL, NULL, CAST(N'2020-11-25' AS Date), 0, 0, 1, 1, NULL, CAST(N'2020-11-29' AS Date), N'test update', N'What', 0, 0, 0, NULL, NULL, 0, N'UPDATE CONTENT A')
SET IDENTITY_INSERT [dbo].[Posts] OFF
SET IDENTITY_INSERT [dbo].[Tags] ON 

INSERT [dbo].[Tags] ([Id], [TagName], [CountNumber]) VALUES (1, N'Some', 2)
INSERT [dbo].[Tags] ([Id], [TagName], [CountNumber]) VALUES (2, N'What', 2)
INSERT [dbo].[Tags] ([Id], [TagName], [CountNumber]) VALUES (3, N'How', 2)
SET IDENTITY_INSERT [dbo].[Tags] OFF
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [CreationDate], [DisplayName], [LastAccessDate], [WebsiteUrl], [Region], [AboutMe], [UpVotes], [DownVotes], [ProfileImageUrl], [Email], [Age], [Account], [PasswordHash]) VALUES (1, CAST(N'2020-10-01' AS Date), N'Võ Quốc Huy', CAST(N'2020-10-01' AS Date), N'https://www.facebook.com/huy.voquoc.167/', N'VietNam', N'huy dep trai vip pro', 1000, 0, NULL, N'voquochuy798@gmail.com', 22, N'admin', N'admin')
INSERT [dbo].[Users] ([Id], [CreationDate], [DisplayName], [LastAccessDate], [WebsiteUrl], [Region], [AboutMe], [UpVotes], [DownVotes], [ProfileImageUrl], [Email], [Age], [Account], [PasswordHash]) VALUES (2, CAST(N'2020-10-01' AS Date), N'Trần Ngọc Hưng', CAST(N'2020-10-01' AS Date), N'https://www.facebook.com/tranngochung.0510/', N'VietNam', N'hung', 1000, 0, NULL, N'hungteddy@gmail.com', 22, N'admin1', N'admin1')
SET IDENTITY_INSERT [dbo].[Users] OFF
SET IDENTITY_INSERT [dbo].[Votes] ON 

INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (1, 1, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (2, 1, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (3, 2, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (4, 2, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (5, 3, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (6, 3, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (7, 3, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (8, 4, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (9, 4, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (10, 5, 1, 2, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (11, 5, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
INSERT [dbo].[Votes] ([Id], [PostId], [VoteTypeId], [UserId], [CreationDate], [BountyAmount]) VALUES (12, 6, 1, 1, CAST(N'2020-10-01' AS Date), NULL)
SET IDENTITY_INSERT [dbo].[Votes] OFF
SET IDENTITY_INSERT [dbo].[VoteType] ON 

INSERT [dbo].[VoteType] ([Id], [VoteValue]) VALUES (1, 0)
INSERT [dbo].[VoteType] ([Id], [VoteValue]) VALUES (2, 1)
SET IDENTITY_INSERT [dbo].[VoteType] OFF
ALTER TABLE [dbo].[Badges]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[PostFeedback] ([Id])
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Logs]  WITH CHECK ADD FOREIGN KEY([TypeId])
REFERENCES [dbo].[LogType] ([Id])
GO
ALTER TABLE [dbo].[Logs]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[PendingFlags]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[PostFeedback]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[PostFeedback]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[PostHistory]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[PostHistory]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[PostLinks]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD FOREIGN KEY([OwnerUserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[ReviewTasks]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[SuggestedEdits]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[SuggestedEditVotes]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[TagSynonyms]  WITH CHECK ADD FOREIGN KEY([OwnerUserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Votes]  WITH CHECK ADD FOREIGN KEY([PostId])
REFERENCES [dbo].[Posts] ([Id])
GO
ALTER TABLE [dbo].[Votes]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO
ALTER TABLE [dbo].[Votes]  WITH CHECK ADD FOREIGN KEY([VoteTypeId])
REFERENCES [dbo].[VoteType] ([Id])
GO
USE [master]
GO
ALTER DATABASE [KLTN] SET  READ_WRITE 
GO
